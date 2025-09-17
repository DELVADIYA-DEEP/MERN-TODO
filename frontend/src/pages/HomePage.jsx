import React from 'react';
import { useTodoContext } from '../context/TodoContext.jsx'; // <--- NEW IMPORT
import TodoForm from '../components/TodoForm.jsx';
import TodoList from '../components/TodoList.jsx';
import Header from '../components/Header.jsx';

const HomePage = () => {
    // Get all necessary state and actions from the Context
    const { todos, loading, error, handleDeleteTodo, handleToggleTodo } = useTodoContext();

    if (loading) {
        return <div>Loading tasks...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Header />
            <h2>My To-Do List</h2>
            {/* TodoForm no longer needs onAdd prop; it uses context internally */}
            <TodoForm />

            <TodoList
                todos={todos}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleTodo}
            />
        </div>
    );
};

export default HomePage;