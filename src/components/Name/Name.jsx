import React, { useEffect, useState } from 'react'

const Name = () => {

  const [fName, SetFName] = useState("Siva");
  const [lName, setLName] = useState("kumar");

  const [fullName, setFullName] = useState(fName.concat(lName));

  function handleChange(){
    const res=fName.concat(lName);
    setFullName(res);
  }

  useEffect( () => {
    console.log(`${fullName}`);
    
  },[fullName]);

  return (
    <div>
      <p>Your Name is: {fullName}</p>
      <div>
      <form action="#">
        <input type="text" name="" id="" onChange={ (e) => {SetFName(e.target.value)}} />
        <input type="text" name="" id="" onChange={ (e) => {setLName(e.target.value)}}/>
        <button onClick={handleChange}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Name