import React, { createContext, useContext, useState } from 'react'
import BranchMain from '../BranchMain/BranchMain';

export const TriggerButton = createContext();

const ButtonMain = () => {

    const [color,setColor] = useState(true);

  return (
    <div className="button-Styl">
        <button onClick={() =>{
             setColor(!color)
        }}>Click</button>
        <TriggerButton.Provider value={color}>
        <BranchMain/>
        </TriggerButton.Provider>
    </div>
  )
}

export default ButtonMain