import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();  // Get the user ID from URL params
  const navigate = useNavigate();  // For navigation after update
  const [user, setUser] = useState({ name: "", email: "", location: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://backendcrud-wvd0.onrender.com/user/searchuser/${id}`);
        if (response.data && response.data.foundUser) {
          setUser(response.data.foundUser); // Set the user data into state
        } else {
          setError("No user found");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,  // Dynamically update the field based on name
    }));
  };

  // Handle form submit to update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/user/updateuser/${id}`,
        user  // Send the updated user data
      );
      alert(response.data.message || "User updated successfully!");
      navigate("/");  // Navigate to the home page or another page
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
