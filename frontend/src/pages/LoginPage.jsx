import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/todoApi';

const LoginPage = () => {
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
            await loginUser({ email, password });
            navigate('/'); // Redirect to home page on successful login
        } catch (err) {
            // Display the specific error message from the backend
            setError(err || 'Login failed. Please try again.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {/* Display error message */}
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

            <form onSubmit={handleSubmit}>
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
                    {loading ? 'Logging In...' : 'Login'}
                </button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default LoginPage;