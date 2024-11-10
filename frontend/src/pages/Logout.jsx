import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data (token, session info) from localStorage or sessionStorage
        localStorage.removeItem('authToken');  // Adjust key if different
        sessionStorage.removeItem('userSession');  // Optional, if using sessionStorage

        // Additional cleanup (e.g., state reset, API call for session invalidation) if needed
        // Example: await api.logoutUser();

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
