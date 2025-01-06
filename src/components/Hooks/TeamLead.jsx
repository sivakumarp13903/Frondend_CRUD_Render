import React from 'react'
import Employee from './Employee'

const TeamLead = (props) => {
  return (
    <div>
        <h3>Team Lead : {props.teamLead}</h3>
        <Employee  employee={props.employee} customer={props.customer}/>
    </div>
  )
}

export default TeamLead