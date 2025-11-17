const express = require('express');
const router = express.Router();
const { validateEmal } = require('../utils/helpers');


let users = [
  { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123' }, 
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
  const { username, email, password, age } = req.body;
  
  // Validation for name, email, and age
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return res.status(400).json({ error: 'Username is required and must be a non-empty string.' });
  }

  if (!email || !validateEmal(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }

  if (age !== undefined && (typeof age !== 'number' || age <= 0)) {
    return res.status(400).json({ error: 'If provided, age must be a positive number.' });
  }

  
  const newUser = {
    id: users.length + 1,
    username: username.trim(),
    email,
    password,
    age
  };
  
  users.push(newUser);
  const userResponse = { ...newUser };
  delete userResponse.password; // Do not return password
  res.status(201).json(userResponse);
});

// Login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
