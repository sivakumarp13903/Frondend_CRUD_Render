import React, { useEffect, useState } from 'react'

const Siva = () => {

  const [count , setCount] = useState(0);

  useEffect( () => {
    console.log({count});
    
  },[count]);

  return (
    <div>
      <div>
        <p>Count : {count}</p>
      </div>
      <div>
        <button type="submit" onClick={ () => setCount(count+1)}>++</button>
        <button type="submit" onClick={ () => {setCount(count-1)}}>--</button>
      </div>

    </div>
  )
}

export default Siva