import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext.jsx'; // <--- NEW IMPORT

const TodoForm = () => {
    const [task, setTask] = useState('');
    const { handleAddTodo } = useTodoContext(); // <--- GET ACTION FROM CONTEXT

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            handleAddTodo(task); // Use the context action
            setTask(''); // Clear the input field
        }
    };

    return (
        <div className="todo-form-container"> {/* Container for layout fix */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm;