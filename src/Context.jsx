import { createContext, useState, React } from "react";
import List_input from "./sheet2";

//Assiging the creatContext function to a variable so it is easier to access for multiiple uses
 const Sheet2Context = createContext();

export function Sheet2provider({children}){
    const[Input, setInput]= useState('abc');
    //Function to change the state of input

    //Function to store the data in an array so we can retrive and display in sheet-3
    const[data, setData]= useState([]);
    
    return(
    <Sheet2Context.Provider value={{Input, setInput ,data, setData}}>
    {children}
    </Sheet2Context.Provider>
    );
}
export default Sheet2Context;