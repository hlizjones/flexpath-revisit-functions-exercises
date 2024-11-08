function createUser(name, role = "guest") {
  return { name, role };
}

// Testing
// Outputs: { name: 'Alice', role: 'guest' }
console.log(createUser("Alice"));
// Outputs: { name: 'Bob', role: 'admin' }
console.log(createUser("Bob", "admin"));
// Outputs: { name: 'Charlie', role: 'guest' }
console.log(createUser("Charlie", undefined));
// Outputs: { name: 'Dave', role: null }
console.log(createUser("Dave", null));
