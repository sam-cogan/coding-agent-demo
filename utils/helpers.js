// Utility functions

// Bug: Function name typo
function validateEmal(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Bug: Logic error in priority validation
function isValidPriority(priority) {
  const validPriorities = ['low', 'medium', 'high'];
  return validPriorities.includes(priority.toUpperCase()); // Bug: Should be toLowerCase()
}

// Bug: Missing implementation
function formatTaskResponse(task) {
  // TODO: Implement proper formatting
  return task;
}

// Bug: Doesn't handle edge cases
function calculateTaskStats(tasks) {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const percentage = (completed / total) * 100; // Bug: No check for division by zero
  
  return {
    total,
    completed,
    pending: total - completed,
    completionRate: percentage
  };
}

// Bug: Missing return statement
function getUser(id) {
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  const user = users.find(u => u.id === id);
  // Fix: Add return statement
  return user;
}

module.exports = {
  validateEmal,
  isValidPriority,
  formatTaskResponse,
  calculateTaskStats,
  getUser
};
