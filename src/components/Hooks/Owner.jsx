import React from 'react'
import Manager from './Manager'

const Owner = (props) => {
  return (
    <div>
        <h1>Owner : {props.owner}</h1>
        <Manager manager={props.manager} teamLead={props.teamLead} employee={props.employee} customer={props.customer} />
    </div>
    
  )
}

export default Owner