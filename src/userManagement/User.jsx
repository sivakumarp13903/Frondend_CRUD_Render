import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users on component mount
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

  // Handle delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://backendcrud-wvd0.onrender.com/user/deleteuser/${id}`);
      alert(response.data.message);
      // Remove deleted user from the state
      setUser(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };

  return (
    <>
      {error && <p>Error fetching users: {error.message}</p>}
      <table border="1px">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
          {users.map((usera, index) => (
            <tr key={index}>
              <td>{usera.name}</td>
              <td>{usera.email}</td>
              <td>{usera.location}</td>
              <td>
                <Link to={`/update/${usera._id}`}>Update</Link>{" "}
                <button onClick={() => handleDelete(usera._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
