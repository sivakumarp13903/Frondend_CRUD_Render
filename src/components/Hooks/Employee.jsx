import React from 'react'
import Customer from './Customer'


const Employee = (props) => {
  return (
    <div>
        <h4>Employee : {props.employee}</h4>
        <Customer customer={props.customer}/>
    </div>
  )
}

export default Employee