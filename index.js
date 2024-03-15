const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());


// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/tasks', require('./src/routes/taskRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));

// Error handling middleware
app.use(require('./src/utils/errorHandler'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
