import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

// 1. Create an Axios Instance
// This automatically prepends the base URL to every request.
const api = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Optional: Timeout requests after 10 seconds
});

// 2. Helper to get the token
const getToken = () => {
    return localStorage.getItem('token');
};

// 3. Helper to set the token for authenticated requests
const getConfig = () => {
    const token = getToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

// ----------------------------------------------------------------------
// AUTHENTICATION API FUNCTIONS
// ----------------------------------------------------------------------

const registerUser = async (userData) => {
    try {
        const response = await api.post('users/register', userData);
        
        console.log(response.data, '--- response data ---');
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            // Optionally, save user data if your backend returns it
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        // Centralized error handling
        throw error.response?.data?.message || error.message;
    }
};

const loginUser = async (userData) => {
    try {
        const response = await api.post('users/login', userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message;
    }
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Clear user data as well
};

// ----------------------------------------------------------------------
// TODO API FUNCTIONS
// ----------------------------------------------------------------------

const getTodos = async () => {
    try {
        const response = await api.get('todos', getConfig());
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message;
    }
};

const createTodo = async (todoData) => {
    try {
        const response = await api.post('todos', todoData, getConfig());
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message;
    }
};

const updateTodo = async (todoId, todoData) => {
    try {
        const response = await api.put(`todos/${todoId}`, todoData, getConfig());
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message;
    }
};

const deleteTodo = async (todoId) => {
    try {
        const response = await api.delete(`todos/${todoId}`, getConfig());
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message;
    }
};

export {
    registerUser,
    loginUser,
    logout,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};