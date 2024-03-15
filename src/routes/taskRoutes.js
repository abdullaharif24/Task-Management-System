const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const taskController = require('../controllers/taskController');

// Protect routes with authentication middleware
router.use(authMiddleware);

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks
router.get('/', taskController.getTasks);

// Mark task as completed
router.put('/:id', taskController.completeTask);

module.exports = router;
