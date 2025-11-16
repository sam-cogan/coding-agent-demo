const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Bug: Missing error handling middleware
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});

module.exports = app;
