import React from 'react'
import {useNavigate} from 'react-router-dom'

function Error_route() { 
   let navigate = useNavigate(); 
   const return_home = () =>{
      navigate("/");
    };
  return (
    
   
    <div>
        <h1 >404 PAGE NOT FOUND</h1>
        <button onClick={return_home} > Click here to redirect to homepage </button>
    </div>
  );
}

export default Error_route;