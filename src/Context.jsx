import { createContext, useState, React,useEffect } from "react";
import List_input from "./sheet2";

//Assiging the creatContext function to a variable so it is easier to access for multiiple uses
 const Sheet2Context = createContext();


export function Sheet2provider({children}){
    const[Input, setInput]= useState('');
    //Function to change the state of input

    //Function to take the file
    const [File, setFile]= useState();
    
    //Function to convert the csv file into an array 
    const [Array, setArray] = useState([]);
    
    const csvtoArray = string =>{
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const Array = csvRows.map(i => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
              }, {});
              return obj;
            });
            
            setArray(Array);
        };

        const headerKeys = Object.keys(Object.assign({}, ...Array));
    
    
    //Function to store the data in an array so we can retrive and display in sheet-3
    const[data, setData]= useState([]); 
    
    
   
    
    return(
    <Sheet2Context.Provider value={{File, setFile, Input, setInput ,data, setData,csvtoArray, headerKeys, Array, setArray}}>
    {children}
    </Sheet2Context.Provider>
    );
}
export default Sheet2Context;