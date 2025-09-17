import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/todoApi';

const Header = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Get user data from localStorage and parse it
        const user = localStorage.getItem('user');
        if (user) {
            try {
                const userData = JSON.parse(user);
                // Display only the first name for a cleaner header
                setUserName(userData.name.split(' ')[0]);
            } catch (e) {
                // Ignore parsing errors
                setUserName('User', e);
            }
        }
    }, []);

    const handleLogout = () => {
        logout(); // Clear the token and user data
        navigate('/login'); // Redirect to the login page
    };

    return (
        <header>
            <h1>{userName ? `Hello, ${userName}!` : 'To-Do App'}</h1>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
};

export default Header;