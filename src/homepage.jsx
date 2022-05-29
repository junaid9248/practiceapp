import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import '../src/homepage.css'
import Sheet2Context from './Context';

function Home() {
    const navigate=useNavigate();
 
    const values = useContext(Sheet2Context);
     let reader= new FileReader();


        // const csvtoArray = string =>{
        // const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        // const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        // const array = csvRows.map(i => {
        //     const values = i.split(",");
        //     const obj = csvHeader.reduce((object, header, index) => {
        //         object[header] = values[index];
        //         return object;
        //       }, {});
        //       return obj;
        //     });
        //     setArray(array);
        // };

        // const headerKeys = Object.keys(Object.assign({}, ...array));
     

    const changeHandler = (a) =>{

        values.setFile(a.target.files[0]);
        console.log(values.File);

        //Function to take read the contents of csv file
        if (values.File){
            reader.onload= function (e){
                const CsvOutput = e.target.result;
                values.csvtoArray(CsvOutput);
            };

            reader.readAsText(values.File);
            
        }

        navigate('/file')
        
       };

        return(
        <div>
            <div>
                <h1 className='input-head' style={{color:'black'}}>Drop or add a file</h1>
                
                    <input name="file_input" type="file" accept={".csv"}  placeholder='...'  onChange={changeHandler}  />
                
            </div>
            
            <footer><h2 style={{color:'black'}}>Advanced Communications and Electronic Systems company <abbr title="Advanced Communications and Electronic Systems company" >ACES </abbr> is a leading international neutral host operator and a digital infrastructure company</h2></footer>
        </div>
    );
}
export default Home;