import React from 'react'
import { TriggerButton } from '../Home/ButtonMain'
import { useContext } from 'react'

const H3 = () => {
    const val = useContext(TriggerButton);
  return (
    <>
    <body style={{
        backgroundColor:val?"lightblue":"lightgray",
        width:"100vw",
        height:"100vh"
    }}>
        Clik Here
        
    </body>

    </>
  )
}

export default H3