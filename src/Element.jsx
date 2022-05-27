import React, { useContext } from 'react'
import { Sheet2provider } from './Context'

function Element() {

    const values = useContext(Sheet2provider)
  return (
    <div>
        {values.Input}
    </div>
  )
}

export default Element