import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/todoApi';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // New state for loading
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true); // Start loading

        try {
            // API call handles data structure validation
            await registerUser({ name, email, password });
            navigate('/'); // Redirect to home page on successful registration
        } catch (err) {
            // Display the specific error message thrown by todoApi.js (e.g., "User already exists")
            setError(err || 'Registration failed due to an unknown error.');
        } finally {
            setLoading(false); // Stop loading
        }
    };
    // console.log(handleSubmit, '--- handleSubmit ---');
    
    return (
        <div>
            <h2>Register</h2>
            {/* Display error message */}
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default RegisterPage;