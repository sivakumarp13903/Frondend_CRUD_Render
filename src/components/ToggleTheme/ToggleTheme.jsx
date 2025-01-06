import React, { createContext, useState } from 'react'
import ToggleBranch1 from './ToggleBranch1';

export const togTheme = createContext();



const ToggleTheme = () => {

    const [color,setColor] = useState({
        textColor:"green",
        bgColor: "red"
    })

const handleClick = function(){
    setColor((prev) => ({
        textColor:prev.textColor==="green"?"red":"green",
        bgColor:prev.bgColor==="red"?"green":"red"
    }))
}
  return (
    <>
    <button onClick={handleClick}>Click Me to Toggle the Text</button>
    <togTheme.Provider value={color}>
        <ToggleBranch1/>
    </togTheme.Provider>
    </>
  )
}

export default ToggleTheme