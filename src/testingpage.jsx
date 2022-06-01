import React, {useState, useEffect, useRef} from 'react'


function Testing() {

    const [name, addName]=useState('');
    console.log(name)
   
    // const InputRef=useRef(1);

    // useEffect(()=>{
    //     InputRef.current=InputRef.current+1; 
    // })
    //an objcet is rturned with the {current: 0} being its format


const changeHandler=(a)=>{
    addName(a.target.value)
   
   
}
    return (
      <div>
            <div style={{color: 'black'}}>This is the name:{name} </div>
           
            <input type="file" accept={'.csv'} value={name} onChange={changeHandler} />
        </div> 
 )
    
}

export default Testing;