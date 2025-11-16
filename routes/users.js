const express = require('express');
const router = express.Router();

// In-memory storage
let users = [
  { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123' }, // Bug: Storing plain text passwords!
  { id: 2, username: 'user1', email: 'user@example.com', password: 'password' }
];

// Get all users
router.get('/', (req, res) => {
  // Bug: Returning passwords in response!
  res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  // Bug: Still returning password
  res.json(user);
});

// Create user
router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  
  // Bug: No email validation
  // Bug: No password strength requirements
  // Bug: No check for duplicate usernames/emails
  
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password // Bug: Storing plain text password
  };
  
  users.push(newUser);
  res.status(201).json(newUser); // Bug: Returning password in response
});

// Login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username && u.password === password);
  
  // Bug: No rate limiting for login attempts
  // Bug: Returns user object with password
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
