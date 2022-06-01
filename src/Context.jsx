import { createContext, useState, React,useEffect, useRef } from "react";
import List_input from "./sheet2";

//Assiging the creatContext function to a variable so it is easier to access for multiiple uses
 const Sheet2Context = createContext();


export function Sheet2provider({children}){
    // const[Input, setInput]= useState('');
   
    //When the hook useState(initialState) is invoked, it returns an array.
    // const [File, setFile]= useState();
    
    //Function to take the file
    const FileRef = useRef('');
    
    
    //Function to convert the csv file into an array 
    const [Array, setArray] = useState([]);
    const TableHeader= useRef('')
    
    const csvtoArray = (string) =>{
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");

        TableHeader.current= csvHeader;
        TableHeader.current.split("/n")
        // console.log(TableHeader.current)

        
        
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
              }, {});
              return obj;
            });
            
            setArray(array);
        };
      
        const headerKeys = Object.keys(Object.assign({}, ...Array));
    
    
    //Function to store the data in an array so we can retrive and display in sheet-3
    // const[data, setData]= useState([]); 
    
    
   
    
    return(
    <Sheet2Context.Provider value={{FileRef ,csvtoArray, headerKeys,TableHeader, Array, setArray}}>
    {children}
    </Sheet2Context.Provider>
    );
}
export default Sheet2Context;