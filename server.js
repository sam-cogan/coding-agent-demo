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

app.use((err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Something went wrong.';

  res.status(status).json({
    error: {
      message: process.env.NODE_ENV === 'production' && status === 500 ? 'Internal Server Error' : message,
      status: status,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
