import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css"; // Import the updated CSS file

const User = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://backendcrud-wvd0.onrender.com/user/fetch", {
        responseType: "json",
      });
      setUser(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://backendcrud-wvd0.onrender.com/user/deleteuser/${id}`);
      alert(response.data.message);
      setUser(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };

  return (
    <div className="user-container">
      <h1 className="user-title">User Management</h1>
      {error && <p className="error-message">Error fetching users: {error.message}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usera, index) => (
            <tr key={index} className="user-row">
              <td>{usera.name}</td>
              <td>{usera.email}</td>
              <td>{usera.location}</td>
              <td>
                <Link to={`/update/${usera._id}`} className="update-link">Update</Link>
                <button className="delete-button" onClick={() => handleDelete(usera._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
