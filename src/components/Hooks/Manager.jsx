import React from 'react'
import TeamLead from './TeamLead'

const Manager = (props) => {
  return (
    <div>
        <h2>Manager : {props.manager} </h2>
        <TeamLead teamLead={props.teamLead} employee={props.employee} customer={props.customer}/>
    </div>
  )
}

export default Manager