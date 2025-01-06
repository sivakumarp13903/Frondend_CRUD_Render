import React, { useState, useEffect, Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    const {name , value } = e.target;
    setFormData( (prevData) => ({
        ...prevData,
        [name]:value,
    }));
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Submitted Data:",formData);
    
  }

  useEffect(() => {
    console.log("Form Data Updated:",formData);
    
  },[formData]);

  return (
    <div className="formContainer">
      <div className="formLists">
        <form action="">
        Name: <input type="text" name="name" id="" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
        Age :<input type="number" name="age" id="" placeholder="Enter age" value={formData.age} onChange={handleChange} required />
        Email :<input type="email" name="email" id="" placeholder="Ender email" value={formData.email} onChange={handleChange} required />
        Gender:
        <input type="radio" name="gender" id="male" value="male" checked={formData.gender==="male"} onChange={handleChange}/> Male
        <input type="radio" name="gender" id="female" value="female" checked={formData.gender==="female"} onChange={handleChange}/> Female
        <button type="submit" onChange={handleSubmit}>Submit</button>
        </form>
        <Link ref={''}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Register;
