
import React, {useContext, useState} from 'react';
import List_display from './sheet3';
import { Sheet2provider } from './Context';

function List_input() {

    const values= useContext(Sheet2provider)
    console.log(values)
    
    // const changeHandler= (a) =>{
    //     values.setInput(a.target.value);
        
    // };
    
    const submitHandler = (a) =>
    {
        a.preventDefault();

        //Creating a place to store new data once submitted after first oneo'   
        const newUserData = values.Input;

        values.setData([...values.data, newUserData])
        //Both the first input then the other inputs will be collected in this array. This is what we have to export to the next sheet-3
        values.setInput('')
    };

    const[Input2, setInput2]=useState('');
    console.log(Input2);

    

    
  return (
    <div className='data_return'> 
          <form onSubmit={submitHandler}><input type="text" placeholder="Enter your task..."  name='input_text' onChange={e => values.setInput(e.target.value)}/> 
        <button className="submit_task" style={{color: 'black'}} onClick={submitHandler}>+</button></form>
       <h1>Let's plan the day!</h1>

       <form action="">
           <input type="text"/>
           <button type='submit'>SUBMIT</button>
       </form>
        
        
    
       {/* {values.data.map(
           (data) => (<List_display
            key={data.index} id={data.index} tasks={data.value}/>)
            )
        } */}
        <List_display />
    
    </div>
    );
    
    //by using map method we will extarct task values from Data state and parse them to an the sheet-3 component with props that will be used to acces it in order

    
    
        
 
};

export default List_input;


