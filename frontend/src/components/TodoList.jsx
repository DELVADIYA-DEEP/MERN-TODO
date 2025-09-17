import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, onDelete, onToggle }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;
