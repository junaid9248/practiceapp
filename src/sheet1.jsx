import React from 'react'
import '../node_modules/bootstrap/js/dist/dropdown'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useContext,useState,useRef } from 'react'
import {useNavigate} from 'react-router-dom';
import Sheet2Context from './Context'
// import DatafieldContext from './datafield_drag'
import './styling/App.css'
import Home from './homepage'
import { saveAs} from 'file-saver';
import {FiTrash} from 'react-icons/fi';


function Sheets() {

  const values=useContext(Sheet2Context);  
  const navigate=new useNavigate();

  const downloadFile= ()=>{
    
    let string=JSON.stringify(values.Array);

    //Initialize the blob that store the converted data
    var blob=new Blob([string],{type:"application/json"});
    saveAs(blob, "file.Owbx"); 
   }

   
   //To set values of the datafield dropdown
   const [dragList, setDragList] = useState(Object.values(values.TableHeader.current))

    const [dragging, setDragging]=useState(false)
    const draggingItem = useRef();
    const dragNode= useRef();
    
    const [rowList,setRowlist]=useState([])
    const [columnList, setcolumnList] = useState([])
    const [active, setActive] = useState(false)
    const [showButtonR, setshowButtonR]= useState(false)
    const [showButtonC, setshowButtonC]= useState(false)
    //Drag handlers
    const dragstartHandler=(d, param,param1)=>
    {
      setDragging(true);
      console.log("drag has started, now dragging=>",param,param1)

      draggingItem.current=param1;    

      
    }
    

  const dropHandler=()=>{
    setshowButtonR(true)
    console.log("Drag has ended...")
    setDragging(false); 
    const draggingItemobj= Object.values(draggingItem.current)
    
    const dragarray=Object.keys(draggingItemobj).map(
    index=> {return draggingItemobj[index]})
      
      setRowlist(dragarray)
     
    console.log(rowList)
    
  
  }
  const dropHandler1=()=>{
    setshowButtonC(true)
    console.log("Drag has ended...")
    setDragging(false); 
    const draggingItemobj= Object.values(draggingItem.current)
    
    const dragarray=Object.keys(draggingItemobj).map(
    index=> {return draggingItemobj[index]})
      
    setcolumnList(dragarray)
     
    console.log(columnList)
  }

  const clearrowParameter=()=>{
    var newlist=rowList;
    newlist.splice(0,1);
    setRowlist([...newlist])
    setshowButtonR(false)
  }
  const clearcolumnParameter=()=>{
    var newlist=columnList;
    newlist.splice(0,1);
    setcolumnList([...newlist]) 
    setshowButtonC(false)
  }
    
   
  return ( 
  <div>
        <ul className="nav nav-pills nav-fill" >
    <li className="nav">
      <div className='dropdown'>
      <button type="button" id="Filebttn" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      File
    </button>
    <ul className="dropdown-menu" aria-labelledby="Filebttn">
      <li><a href="#" className='dropdown-item' onClick={downloadFile} >Save</a></li>
    </ul>
    </div>
  </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
    Data
  </button>
  </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Worksheet
    </button>
  </li>
  <li className="nav">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dashboard
    </button>
  </li>
</ul>
<ul className='secondbar'>
  <li><a href=''>Home</a></li>
  <li> <a href="">Left</a></li>
  <li><a href=""> Right</a></li>
</ul>

<div className='task'>
  <div className='second'>
  <table className='table table-bordered border-dark' style={{width:'160px'}}>
  
  <thead>
  
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">


      <div className='dropdown drag-and-drop'>
        <button type="button" id='datafield-button' className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Datafield
        </button>
        <ul className="dropdown-menu dnd-group" aria-labelledby="datafield-button" >
          <h6 className='dropdown-header'>Measurement 1</h6>          
          {dragList.map((val,key) => (<li  key={key} draggable onDragStart={(d)=>dragstartHandler(d,{key},{val})}
          className={ "dropdown-item dnd-items"}> {val} </li>))}
         
          
        </ul>
      </div>
      </th>
      
      
      <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Analytics</button></th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody style={{height:'80vh'}}>
    <tr>
     <td className="datafield-column ">
     </td>
     <td></td>
     </tr>
    </tbody>
  </table>

  <table className='table table-bordered border-dark' >
  
  <tbody >
    <tr className='other'>
      
      <td style={{paddingRight:'90px'}} ><button type="button"  class="btn btn-secondary btn-sm "><i>Filters</i></button><br/><br/>
      <button type="button" class="btn btn-secondary btn-sm"><i>Marks</i></button><br/><br/>
      <button type="button" class="btn btn-secondary btn-sm"><i>Pages</i></button></td>
      
    </tr>
     
 </tbody>
  </table>
</div>

  <table className='table table-bordered border-dark' style={{justifyContent:'right', border:'1px solid black'}}  >
  <tbody >
          <tr style={{display: 'flex', flexDirection:'row', border:'none', alignItems:'center' }}> 
          <h6 style={{margin:'5px', padding:'2px'}}>row:</h6> 
          <div style={{padding:'0px',marginLeft:'0.25rem'}}>
                <table>
                  <tr>
              <div className='row-div'
                onDragOver={(e)=>{e.preventDefault()}}
                onDrop={()=> dropHandler()}>
                {rowList[0]}

                { showButtonR ? <button className='delete-button row-button' onClick={()=>clearrowParameter()}>
                  <FiTrash height='1rem'/>
                </button> : null }
              
              </div>
              {/* {rowlist===null ?' hide-button' : 'delete-button row-button' } */}
              </tr>
              </table>
              </div>

        </tr>
        
        <hr style={{margin:'20px 0px'}}/> 
        
        <tr style={{display: 'flex', flexDirection:'row', border:'none', alignItems:'center'}}> 
          <h6 style={{margin:'5px', padding:'2px'}}>column:</h6>
          <div className='column-div' 
          onDragOver={(e)=>{e.preventDefault()}}
          onDrop={()=> dropHandler1()}>
                {columnList[0]}
                { showButtonC ? <button className='delete-button row-button' onClick={()=>clearcolumnParameter()}>
                  <FiTrash height='1rem'/>
                </button> : null }         
          </div>
        </tr> 
        <hr style={{margin:'20px 0px'}}/> 
        <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Submit
        </button> 
      
    
    {/* <tr>
       <td>
          
      </td>
    </tr> */}
    </tbody>
  </table>
    </div>

    <div className='datasource-container'>
      
        <div className='sheets-tab'>
          <button onClick={()=>{
            navigate('/sheet/datasource');
        }}> Datasource </button>

          <button><a href="">Sheet-1</a></button>
            <button><a href="">Sheet-2</a></button>
        </div>
        <div className='add-button'>
            <button>+</button>
        </div>

    </div>
</div>
  )
};

export default Sheets;