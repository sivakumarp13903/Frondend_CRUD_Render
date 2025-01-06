import React, { useEffect } from 'react'
import Parent from './Parent'

const Child = (props) => {
  useEffect( () => {
    setTimeout( () => {
      console.log(`${props.name}`);
    },2000)
  },[props.name])
  return (
    <div>This is the name render from Parent {props.name} and age is {props.age}</div>
  )
}

export default Child