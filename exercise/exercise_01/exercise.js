// Write code that demonstrates the difference in hoisting behavior between 
// function declarations and function expressions. 

// Specifically, attempt to call both a function declaration and 
// a function expression before they are defined, and explain the results.

logToConsoleDeclaration() // prints "Hello!"
logToConsoleExpression() // error Cannot access "logtoConsoleExpression" before initialization

let logToConsoleExpression = function () {
    console.log("Hello!")
}

function logToConsoleDeclaration () {
    console.log("Hello!")
}

