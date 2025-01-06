import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');

    const handleDelete = async () => {
        if (!userId) {
            alert('Please enter a valid User ID!');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:3001/user/deleteuser/${userId}`);
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user. Please check the ID.');
        }
    };

    return (
        <div>
            <h1>Delete User</h1>
            {/* Input field to provide User ID */}
            <div>
                <label>User ID:</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                    required
                />
            </div>
            {/* Delete Button */}
            <button type="button" onClick={handleDelete}>
                Delete User
            </button>
        </div>
    );
};

export default DeleteUser;
