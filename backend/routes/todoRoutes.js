const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

const { protect } = require('../middleware/authMiddleware'); // Import the middleware

// Define routes for CRUD operations and apply the 'protect' middleware
router.route('/')
    .get(protect, getTodos) // The 'protect' middleware runs before 'getTodos'
    .post(protect, createTodo); // Ensures only authenticated users can create a todo

router.route('/:id')
    .put(protect, updateTodo) // Ensures only authenticated users can update
    .delete(protect, deleteTodo); // Ensures only authenticated users can delete

module.exports = router;