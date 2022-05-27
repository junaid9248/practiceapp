import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Sheets() {
  return (
<div>
        <ul className="nav nav-pills nav-fill" >
    <li className="nav">
   <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    File
  </button>
  </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
     <td></td>
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
        <div className='datasource-tab'> Datasource </div>
        <div className='sheets-tab'>
            <button><a href="">Sheet-2</a></button>
            <button><a href="">Sheet-3</a></button>
        </div>
        <div className='add-button'>
            <button>+</button>
        </div>

    </div>
</div>
  )
};

export default Sheets;