function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const user = { name: "Bob" };

// Using call
greet.call(user, "Hello"); // Outputs: 'Hello, Bob!'

// Using apply
greet.apply(user, ["Hi"]); // Outputs: 'Hi, Bob!'

// Using bind
const boundGreet = greet.bind(user);
boundGreet("Welcome"); // Outputs: 'Welcome, Bob!'
