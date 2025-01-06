import React, { createContext } from 'react'
import UseContext from '../components/Hooks/UseContext';

export const MyContext = createContext();

const ContextProvider = () => {
    const sharedValue = "Hello, useContext!";

    return (
      <MyContext.Provider value={sharedValue}>
        <UseContext/>
      </MyContext.Provider>
    )
}

export default ContextProvider