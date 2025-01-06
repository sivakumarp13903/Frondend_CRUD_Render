import React from 'react'
import { togTheme } from './toggleTheme'
import { useContext } from 'react'


const ToggleBranch2 = () => {
    const {textColor , bgColor} = useContext(togTheme);
  return (
    <>
    <h1 style={bgColor==="red"?{backgroundColor:"lightgreen", color:"red"}:{backgroundColor:"lightpink", color:"green"}}>
        This is Sivakumar From MCA
    </h1>
    <h1 style={textColor==="red"?{backgroundColor:"lightgreen", color:"red"}:{backgroundColor:"lightpink", color:"green"}}>
        This is Sukesh From MCA
    </h1>
    </>
    
  )
}

export default ToggleBranch2