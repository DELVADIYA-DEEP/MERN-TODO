import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/todoApi';

// 1. Create the Context object
const TodoContext = createContext();

// 2. Custom Hook for easy consumption
export const useTodoContext = () => useContext(TodoContext);

// 3. Provider Component
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initial data fetch
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        setLoading(true);
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (err) {
            // Handle unauthorized or network errors
            setError(err || 'Failed to fetch todos.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddTodo = async (task) => {
        try {
            const newTodo = await createTodo({ task });
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        } catch (err) {
            setError('Failed to add todo.');
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
        } catch (err) {
            setError('Failed to delete todo.');
        }
    };

    const handleToggleTodo = async (id, completed) => {
        try {
            const updatedTodo = await updateTodo(id, { completed });
            setTodos((prevTodos) => prevTodos.map(todo => (todo._id === id ? updatedTodo : todo)));
        } catch (err) {
            setError('Failed to update todo.');
        }
    };

    const contextValue = {
        todos,
        loading,
        error,
        fetchTodos, // Can be used for manual refresh
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};