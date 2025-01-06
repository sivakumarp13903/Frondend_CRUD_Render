import React, { useContext } from 'react'
import { MyContext } from '../../ContextProvider/ContextProvider'
import UseContext from './UseContext'

const Customer = (props) => {
  const value = useContext(MyContext);
  return (
    <div>
        <h5>Customer : {value} </h5>
    </div>
  )
}

export default Customer