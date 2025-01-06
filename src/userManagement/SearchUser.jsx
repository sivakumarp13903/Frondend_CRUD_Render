import React, { useState } from "react";
import axios from "axios";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchUserByNameAndEmail = async () => {
    try {
      const response = await axios.get(
        `https://backendcrud-wvd0.onrender.com/user/searchuser`, {
          params: { name: userName, email: userEmail }
        }
      );
      setUserData(response.data.user); // Assuming the backend sends `user` data in response
      setIsFetched(true);
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("User not found!");
    }
  };

  return (
    <>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label>User Email:</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <button type="button" onClick={fetchUserByNameAndEmail}>
          Fetch User
        </button>
      </div>
      {isFetched && userData && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Location: {userData.location}</p>
        </div>
      )}
    </>
  );
};

export default SearchUser;
