import React from 'react'
import Owner from './Owner';

const UseContext = () => {
    const owner ="Sivakumar";
    const manager ="Yugesh"
    const teamLead = "Nisanth"
    const employee = "Ashwin"
    const customer = "Sathish"
  return (
    <div>
        <Owner owner={owner} manager={manager} teamLead={teamLead} employee={employee} customer={customer} />
    </div>
  )
}

export default UseContext