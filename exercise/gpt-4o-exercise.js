// Exercise 1: Function declaration
function greet() {
    console.log("Hello, world!");
}
greet();

// Exercise 2: Function expression
const sayHi = function() {
    console.log("Hi there!");
};
sayHi();

// Exercise 3: Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

// Exercise 4: IIFE
(function() {
    console.log("This is an IIFE!");
})();

// Exercise 5: Closure
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// Exercise 6: Function hoisting
hoistedFunction();
function hoistedFunction() {
    console.log("This function is hoisted!");
}

// Exercise 7: Default parameter
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Alice");

// Exercise 8: Using the arguments object
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Exercise 9: Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Exercise 10: Higher-order function
function executeCallback(callback) {
    callback();
}
executeCallback(() => console.log("Callback executed!"));

// Exercise 11: setTimeout
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Exercise 12: setInterval
let counterValue = 0;
const intervalId = setInterval(() => {
    counterValue++;
    console.log(`Counter: ${counterValue}`);
    if (counterValue === 5) clearInterval(intervalId);
}, 1000);

// Exercise 13: Class with a method
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
const dog = new Animal("Dog");
dog.speak();

// Exercise 14: Using bind()
const person = {
    name: "John",
    printName: function() {
        console.log(this.name);
    }
};
const print = person.printName.bind({ name: "Jane" });
print();

// Exercise 15: Using call()
function introduce(language) {
    console.log(`I am ${this.name} and I speak ${language}`);
}
introduce.call({ name: "Sarah" }, "English");

// Exercise 16: Using apply()
function sumNumbers(a, b, c) {
    return a + b + c;
}
console.log(sumNumbers.apply(null, [1, 2, 3])); // 6

// Exercise 17: Promise
const delayedPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});
delayedPromise.then(console.log);

// Exercise 18: Async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

// Exercise 19: Retry mechanism
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
        }
    }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1").then(console.log);

// Exercise 20: Promise chaining
const promiseChain = new Promise((resolve) => resolve(1))
    .then(result => result * 2)
    .then(result => result + 3)
    .then(console.log); // 5

// Exercise 21: Promise.all()
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    .then(results => console.log(results)); // [1, 2, 3]

// Exercise 22: Promise.race()
Promise.race([Promise.resolve("First"), new Promise(resolve => setTimeout(() => resolve("Second"), 1000))])
    .then(console.log); // "First"

// Exercise 23: Using bind() to return a new function
function printAge() {
    console.log(this.age);
}
const boundFunction = printAge.bind({ age: 30 });
boundFunction();

// Exercise 24: Asynchronous callback
function asyncOperation(callback) {
    setTimeout(() => {
        callback("Operation complete");
    }, 1000);
}
asyncOperation(message => console.log(message));

// Exercise 25: Closure with a counter
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const count = makeCounter();
console.log(count()); // 1
console.log(count()); // 2

// Exercise 26: Arrow function with `this`
const user = {
    name: "Sam",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
};
user.greet(); // `this` does not refer to `user`

// Exercise 27: Using finally()
const finalPromise = Promise.resolve("Done!");
finalPromise.finally(() => console.log("Cleanup")).then(console.log);

// Exercise 28: Debounce function
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}
const debouncedLog = debounce(() => console.log("Debounced!"), 2000);
debouncedLog();

// Exercise 29: Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Exercise 30: Async error handling
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();
