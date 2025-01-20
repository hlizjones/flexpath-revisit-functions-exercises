// Use the Function constructor to create a function dynamically that 
// computes the factorial of a number. 

// The function should be named `dynamicFactorial` and accept a single parameter 'n',
// which is an integer.

const dynamicFactorial = new Function ('n', 
    `let result = 1
    for (let i = 2; i <= n; i++) {
    result *= i
    }
    return result`)

// When ready, use code below for testing
console.log(dynamicFactorial(5)); // Outputs: 120
