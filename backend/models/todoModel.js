const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema({
    user: {
        // A reference to the User model, linking a todo item to a specific user
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    task: {
        type: String,
        required: [true, 'Please add a task'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // This adds 'createdAt' and 'updatedAt' fields automatically
});

// Create and export the Todo model
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;