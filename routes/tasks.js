const express = require('express');
const router = express.Router();

// In-memory storage (Bug: Should use proper database)
let tasks = [
  { id: 1, title: 'Sample Task', description: 'This is a sample task', completed: false, priority: 'medium' },
  { id: 2, title: 'Another Task', description: 'Another sample', completed: true, priority: 'high' }
];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get task by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  // Bug: No error handling for task not found
  res.json(task);
});

// Create new task
router.post('/', (req, res) => {
  const { title, description, priority } = req.body;
  
  // Bug: Missing input validation
  const newTask = {
    id: tasks.length + 1, // Bug: Not thread-safe ID generation
    title,
    description,
    completed: false,
    priority: priority || 'medium'
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);
  
  // Bug: Wrong status code and no validation
  if (taskIndex === -1) {
    return res.status(500).json({ error: 'Task not found' });
  }
  
  // Bug: Doesn't validate which fields can be updated
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  res.json(tasks[taskIndex]);
});

// Delete task
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  
  // Bug: Returns success even if task wasn't found
  res.json({ message: 'Task deleted sucessfully' });
});

// Bug: Missing endpoint to filter tasks by status or priority

module.exports = router;
