import React from 'react'
import { ClickButton } from './StoreContext'
import { useContext } from 'react'

const Branch1 = () => {
    const {empName,empSalary,empAddress} = useContext(ClickButton);
    return (
        <div>
          <p>Emp Name: {empName.firstName.concat(empName.lastName)}</p>
          <p>Emp Salary: {empSalary}</p>
          <p>Emp Address: {empAddress}</p>
        </div>
      );
}

export default Branch1



 