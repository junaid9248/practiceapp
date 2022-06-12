import React, { useContext } from 'react'
import Sheet2Context, { Sheet2provider } from './Context'
import '../src/styling/datasource_display.css'

function Element() {

    const values1 = useContext(Sheet2Context);

    return (
    <div>
      <table className=' table table-bordered table-hover' style={{color:'black'}}>
        <thead className='thead thead-dark'>
        <tr key={"header"}>
            {values1.headerKeys.map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
        {values1.Array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val, key) => (
                <td key={key}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
       
       
    </div>
  )
}

export default Element;