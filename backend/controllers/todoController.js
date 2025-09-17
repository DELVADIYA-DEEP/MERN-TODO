const Todo = require('../models/todoModel');
const User = require('../models/userModel'); // Import the User model

// @desc    Get all todos for a specific user
// @route   GET /api/todos
// @access  Private
const getTodos = async (req, res) => {
    try {
        // Find all todos that belong to the logged-in user (req.user.id)
        const todos = await Todo.find({ user: req.user.id });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new todo for a specific user
// @route   POST /api/todos
// @access  Private
const createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) {
            return res.status(400).json({ message: 'Task field is required' });
        }
        // Create the todo and link it to the logged-in user
        const todo = await Todo.create({
            task,
            user: req.user.id,
        });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a todo for a specific user
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        // Ensure the logged-in user is the owner of the todo
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized to update this todo' });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a todo for a specific user
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        // Ensure the logged-in user is the owner of the todo
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized to delete this todo' });
        }

        await todo.deleteOne();
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};