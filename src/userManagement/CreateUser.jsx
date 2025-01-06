import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const CreateUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: ""
      });
    
      const [message, setMessage] = useState("");
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Replace with your backend API endpoint
          const response = await axios.post("https://backendcrud-wvd0.onrender.com/user/createuser", formData);
          setMessage(response.data.message || "User created successfully!");
        } catch (error) {
          console.error("Error creating user:", error);
          setMessage("Error creating user. Please try again.");
        }
      };
    
      return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2>Create User</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
              Submit
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };

export default CreateUser

