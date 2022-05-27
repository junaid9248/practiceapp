import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import '../src/homepage.css'

function Home() {
    const navigate=useNavigate();

    const [File, setFile]= useState();

    const changeHandler = (a) =>{
        const [f]= a.target.files;

        setFile(a.target.files[0]);
        navigate('/file');
     };
    console.log(File);
        return(
        <div>
            <div>
                <h1 style={{color:'black'}}>Drop or add a file</h1>
                
                    <label htmlFor="file_input" style={{color:'black'}}>Drop a single file to be processed</label> <br />
                    <input name="file_input" type="file" placeholder='...'  onChange={changeHandler}  />
                
               


            </div>
            
            <footer><h2 style={{color:'black'}}>Advanced Communications and Electronic Systems company <abbr title="Advanced Communications and Electronic Systems company" >ACES</abbr> is a leading international neutral host operator and a digital infrastructure company</h2></footer>
        </div>
    );
}
export default Home;