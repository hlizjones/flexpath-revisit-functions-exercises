function createUser(name, role = "guest") {
  return { name, role };
}

// Testing
console.log(createUser("Alice")); // Outputs: { name: 'Alice', role: 'guest' }
console.log(createUser("Bob", "admin")); // Outputs: { name: 'Bob', role: 'admin' }
console.log(createUser("Charlie", undefined)); // Outputs: { name: 'Charlie', role: 'guest' }
console.log(createUser("Dave", null)); // Outputs: { name: 'Dave', role: null }
