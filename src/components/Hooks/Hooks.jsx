import React, { useEffect, useRef, useState } from 'react'
import './Hooks.css'

const Hooks = () => {

    const [count , setCount] = useState(0);

    const countRef = useRef(0);
    
    const increment = () => {
        setCount(count+1);
        countRef.current++;
        
        console.log("fun "+count);
        console.log(`use Ref count : ${countRef.current}`);
    }


  return (
    <div>
        <h1>State Count : {count}</h1>
        <button type="button" onClick={increment}>+</button>
    </div>
  )
}

export default Hooks