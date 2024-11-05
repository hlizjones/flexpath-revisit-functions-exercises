// Exercise 1: Function Declaration

// Description: Write a function declaration named greet that accepts a parameter name and
// logs "Hello, [name]!" to the console. Call the function with an example name.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!

/*

Exercise 2: Function Expression

Description: Write a function expression named add that takes 
two parameters a and b, and returns their sum. Call the function with example arguments.

*/

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

/*

Exercise 3: Differences Between Function Declarations and Expressions

Description: Explain the difference between function declarations and function expressions, 
particularly in terms of hoisting. Provide examples to illustrate.

Answer:

Function declarations are hoisted to the top of their scope, 
allowing them to be called before they appear in the code. Function expressions 
are not hoisted in the same way; the variable may be hoisted, but it remains undefined until the assignment.


*/

// Example of Function Declaration Hoisting:
// Function can be called before it's declared
greet("Bob");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Example of Function Expression (Not Hoisted):
// This will cause an error because 'add' is not yet defined
console.log(add(2, 3)); // Error: add is not a function

const add_1 = function (a, b) {
  return a + b;
};

// Exercise 4: Arrow Function Syntax
// Description: Convert the following function expression to an arrow function:

const multiply = function (a, b) {
  return a * b;
};

// answer
const multiply_ans = (a, b) => a * b;

/*

	Exercise 5: Arrow Functions and this Binding

Description: Explain how the this keyword behaves differently in arrow functions compared to regular functions. 
Provide an example where an arrow function cannot be used because of this difference.
Answer:

In regular functions, the value of this depends on how the function is called. 
In arrow functions, this is lexically bound, meaning it uses this from the surrounding scope.


*/

// Example where arrow function cannot be used:
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice

// If we use an arrow function:
const personArrow = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

personArrow.greet(); // Output: Hello, my name is undefined

// In the arrow function, this does not refer to personArrow but to the
// surrounding scope (which could be the global object or undefined in strict mode).

/*
	Exercise 6: Function Constructor

Description: Use the Function constructor to create a function named subtract that takes 
two arguments and returns their difference. Call the function with example arguments.

*/

// answer
const subtract = new Function("a", "b", "return a - b;");

console.log(subtract(10, 3)); // Output: 7

/*

	Exercise 7: Recursive Function

Description: Write a recursive function named factorial 
that calculates the factorial of a number. Include a base case to prevent infinite recursion.

*/

// answer
function factorial(n) {
  if (n <= 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

/*

	Exercise 8: Understanding Base Cases in Recursion

Description: Explain why a base case is essential in a recursive function. 
What could happen if a recursive function lacks a proper base case?

Answer:

A base case stops the recursion by providing a condition under which the function does not 
make a recursive call. Without a base case, 
the function would call itself indefinitely, leading to a stack overflow error.

*/

/*

	Exercise 9: Immediately Invoked Function Expression (IIFE)

	Description: Write an IIFE that logs "IIFE executed!" to the console.
*/

// answer

(function () {
  console.log("IIFE executed!");
})();

/*
	Exercise 10: Use Cases for IIFE

Description: Explain the use cases for an IIFE in JavaScript. Why might you use one?
Answer:

An IIFE is used to create a new scope and avoid polluting the global namespace. 
It can encapsulate code and protect variables from being accessed or modified outside of the IIFE.

*/

/*

	Exercise 11: Function Parameters vs. Arguments

Description: Define a function named divide with parameters a and b. 
Call the function with arguments 10 and 2, and explain the difference between parameters and arguments.

*/

// answer
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2)); // Output: 5

/*

	Explanation:

	Parameters are variables listed in the function definition (a and b).
Arguments are the actual values passed to the function when called (10 and 2).

*/

/*

Exercise 12: Pass-by-Value vs. Pass-by-Reference

Description: Explain the difference between pass-by-value and pass-by-reference in JavaScript. 
Provide examples using primitive and reference types.
Answer:

In JavaScript, primitive types (number, string, boolean, etc.) are passed by value, 
meaning a copy of the value is passed to functions. Objects are passed by reference, 
meaning the function receives a reference to the same object.


*/

// example
// Pass-by-value (primitive type)
let num = 10;
function increment(value) {
  value++;
}
increment(num);
console.log(num); // Output: 10 (unchanged)

// Pass-by-reference (object)
let obj = { count: 10 };
function incrementCount(o) {
  o.count++;
}
incrementCount(obj);
console.log(obj.count); // Output: 11 (changed)

/*
	Exercise 13: Default Parameters

Description: Write a function greet that takes a parameter name 
with a default value of 'Guest'. Call the function without passing any arguments.

*/

// answer
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!

/*

	Exercise 14: The arguments Object

Description: Write a function sum that uses the arguments 
object to calculate the sum of all arguments passed to it.

*/

// answer
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

/*
	Exercise 15: Rest Parameters

Description: Rewrite the sum function from the previous exercise using rest parameters.

*/

// answer
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

/*
	Exercise 16: Higher-Order Functions (Callbacks)

Description: Write a function operate that takes two numbers and a callback function. 
The function should apply the callback to the two numbers and return the result. 
Demonstrate using this function with addition and multiplication operations.


*/

// answer
function operate(a, b, callback) {
  return callback(a, b);
}

const add_2 = (x, y) => x + y;
const multiply_2 = (x, y) => x * y;

console.log(operate(5, 3, add)); // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15

/*

	Exercise 17: Asynchronous Callbacks with setTimeout

Description: Use setTimeout to log "Hello after 2 seconds" to the console after a 2-second delay.


*/

// answer
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

/*

	Exercise 18: Function Scope

Description: Explain the concept of function scope in JavaScript. 
Write code demonstrating how a variable declared inside a function is not accessible outside of it.
Answer:

In JavaScript, variables declared inside a function are scoped to that 
function and cannot be accessed from outside.


*/

// example
function testScope() {
  let localVariable = "I am local";
}

testScope();
console.log(localVariable); // Error: localVariable is not defined

/*

	Exercise 19: Closures

Description: Write a function makeCounter that returns a function that increments and returns a counter variable. 
Demonstrate how the inner function retains access to the outer function's variables.

*/

// answer
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

/*
	Explanation:

The inner function forms a closure, 
retaining access to the count variable even after makeCounter has finished execution.
*/

/*
	Exercise 20: The this Keyword in Global Context

Description: In the global context, what does this refer to? Demonstrate with an example.
Answer:

In the global context, this refers to the global object (window in browsers, global in Node.js).

*/

// example
console.log(this === window); // true in browsers

this.globalVar = "Hello";
console.log(window.globalVar); // Output: Hello

/*

	Exercise 21: The this Keyword in Methods

Description: Create an object calculator with a method add that adds two numbers and returns the result. 
Demonstrate how this refers to the object when the method is called.
*/

const calculator = {
  a: 0,
  b: 0,
  setValues(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
};

calculator.setValues(5, 7);
console.log(calculator.add()); // Output: 12

/*
Explanation:

Within the method, this refers to the calculator object.
*/

/*

	Exercise 22: The this Keyword in Regular Functions

Description: Write a regular function (not a method) and explain what this refers to inside it. 
Demonstrate how it differs when in strict mode.

*/

// answer
function showThis() {
  console.log(this);
}

showThis(); // In non-strict mode, outputs the global object (window)
// In strict mode, outputs undefined

/*

	Exercise 23: The this Keyword in Arrow Functions

Description: Demonstrate how this behaves differently in arrow functions compared to regular functions.

*/

// answer
const obj_2 = {
  regularFunction: function () {
    console.log(this); // Refers to obj
  },
  arrowFunction: () => {
    console.log(this); // Refers to the surrounding scope's this (probably global or undefined)
  },
};

obj_2.regularFunction(); // Outputs obj
obj_2.arrowFunction(); // Outputs window (or undefined in strict mode)

/*

	Exercise 24: Using bind() to Control this

Description: Write a function greet that uses this.name. Create an object person with a name property. 
Use bind() to create a new function personGreet where this is bound to person. Call personGreet().


*/

// answer
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person_2 = { name: "Alice" };

const personGreet = greet.bind(person_2);

personGreet(); // Output: Hello, Alice!

/*

	Exercise 25: Using call() and apply() to Control this

Description: Explain the difference between call() and apply() methods. 
Use both to invoke a function introduce with this set to an object user and pass parameters accordingly.
Answer:

Difference:

call() invokes a function with a given this value and arguments provided individually.
apply() invokes a function with a given this value and arguments provided as an array.


*/

// example
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const user = { name: "Bob" };

introduce.call(user, "Hi", "!"); // Output: Hi, I'm Bob!
introduce.apply(user, ["Hello", "."]); // Output: Hello, I'm Bob.
