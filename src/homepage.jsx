import React, { useContext, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import '../src/homepage.css'
import Sheet2Context from './Context';


function Home() {
    const navigate=useNavigate();
    const values = useContext(Sheet2Context);
    
    let reader= new FileReader();

    const changeHandler = (a) =>{

        values.FileRef.current=a.target.files[0]
    
         
        //Setting values of FileRef
        // values.FileRef=a.target.files[0];
        console.log(values.FileRef)
 
        //Function to take read the contents of csv file
   
            reader.onload= function (e){
                const CsvOutput = e.target.result;

                //Present in context page
                values.csvtoArray(CsvOutput);
            };

            reader.readAsText(values.FileRef.current);
            console.log(values.FileRef.current)
            
        navigate('/sheet')
        
       };

        return(
        <div>
            <div className='input-box'>
                
                    
                    <label htmlFor="file_input" > Drop or add a file </label>
                    <input id="file_input" type="file"  accept={".csv"}  placeholder='...'  onChange={changeHandler}  />
                    
                
            </div>
            
            <footer><h2 style={{color:'black'}}>Advanced Communications and Electronic Systems company <abbr title="Advanced Communications and Electronic Systems company" >ACES </abbr> is a leading international neutral host operator and a digital infrastructure company</h2></footer>
        </div>
    );
}
export default Home;