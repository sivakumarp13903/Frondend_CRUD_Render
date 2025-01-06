import React, { useState } from 'react';
import axios from "axios";
import "./CreateUser.css"; // Import CSS file

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
      setFormData({ name: "", email: "", location: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Error creating user. Please try again.");
    }
  };

  return (
    <div className="create-user-container glass-effect">
      <h2 className="form-title">Create User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default CreateUser;
