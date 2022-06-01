import React from 'react'
import '../node_modules/bootstrap/js/dist/dropdown'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import Sheet2Context from './Context'
import './styling/App.css'
import Home from './homepage'
import { saveAs} from 'file-saver';


function Sheets() {

  const values=useContext(Sheet2Context);
  const navigate=new useNavigate();

  let Datafield_valueobj=Object.values(values.TableHeader.current);
  


   const downloadFile= ()=>{
    
    let string=JSON.stringify(values.Array);
    console.log(values.Array)
    console.log(typeof(values.Array))

    //Initialize the blob that store the converted data
    var blob=new Blob([string],{type:"application/json"});
    saveAs(blob, "file.Owbx"); 
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
      <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Datafield</button></th>
      <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Analytics</button></th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody style={{height:'80vh'}}>
    <tr>
     <td className="datafield-column ">
      {console.log(values.TableHeader.current)}
      {
    
        Datafield_valueobj.map((val,key)=> 
        (<tr className="datafield-column" key={key}> {val} </tr>)
        )

      }
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

  <table className='table table-bordered border-dark' style={{justifyContent:'right'}}  >
  <tbody >
    <tr>
      
      <td >
        row: <hr/> 
        column:<hr /> 
        <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Submit
        </button> </td>
      
    </tr>
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
            console.log()
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