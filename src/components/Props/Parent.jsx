import React from 'react'
import Child from './Child';

const Parent = () => {
    const name = "Siva";
    const age = 12;
  return (
    
    <Child name={name} age={age}/>
  )
}

export default Parent