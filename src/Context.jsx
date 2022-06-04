import { createContext, useState, React,useEffect, useRef } from "react";
import List_input from "./sheet2";

//Assiging the creatContext function to a variable so it is easier to access for multiiple uses
 const Sheet2Context = createContext();


export function Sheet2provider({children}){

   
    
    //Function to take the file
    const FileRef = useRef('');
    
    
    //Function to convert the csv file into an array 
    const [Array, setArray] = useState([]);
    
    //In this Ref we will store the headers of the various columns
    const TableHeader= useRef('')
    
    const csvtoArray = (string) =>{
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");

        //Assigning the extracted headers to the 'current' property
        TableHeader.current= csvHeader;
        
        
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
    
     //Storing the list of headers that are manipulated using stat
  
    
    
   
    
    return(
    <Sheet2Context.Provider value={{FileRef ,csvtoArray, headerKeys,TableHeader, Array, setArray}}>
    {children}
    </Sheet2Context.Provider>
    );
}
export default Sheet2Context;