import React, {useState, useContext} from 'react';
import Sheet2Context from './Context';


function List_display() {
  
  // This statment extracts 'data' from Sheet2Context
  const values= useContext(Sheet2Context);
  console.log(values);
  
  return (
    <div>
      <h1>What do you have to get done today...</h1>
      <div className='tasks-container'>
       
        <h5 style={{color:'black'}}>{values.data.map(
           (each,key) => (<h1 key={key}> {each} </h1>)
            )
        }</h5>
      </div>
      

    </div>
  )
}

export default List_display;