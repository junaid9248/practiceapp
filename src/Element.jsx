import React, { useContext } from 'react'
import Sheet2Context, { Sheet2provider } from './Context'

function Element() {

    const values1 = useContext(Sheet2Context);

    
    
  return (
    <div>
      <table style={{color:'black'}}>
        <thead>
        <tr key={"header"}>
            {values1.headerKeys.map((key) => (
              <th>{key}</th>
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