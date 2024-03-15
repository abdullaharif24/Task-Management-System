const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Protect routes with authentication middleware
router.use(authMiddleware);

// Get user profile
router.get('/profile', userController.getProfile);

module.exports = router;
