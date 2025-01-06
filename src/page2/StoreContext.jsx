import React, { createContext, useState } from 'react'
import Branch1 from './Branch1';

export const ClickButton = createContext();


const StoreContext = () => {


    const empDetails ={
      empName : {firstName:"Siva",
                lastName : "Kumar"
              },
      empSalary : "250000",
      empAddress : "Erode"
    };

  return (
        <ClickButton.Provider value={empDetails}>
            <Branch1/>
        </ClickButton.Provider>
  )
}

export default StoreContext