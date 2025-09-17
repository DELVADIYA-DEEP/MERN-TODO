import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <div className="todo-item">
            <span
                className={`todo-task ${todo.completed ? 'completed' : ''}`}
                onClick={() => onToggle(todo._id, !todo.completed)}
            >
                {todo.task}
            </span>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
