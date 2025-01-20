// Use an IIFE to create a module called `counterModule` that encapsulates a 
// private variable 'count'. 

// Expose methods `increment`, `decrement`, and `getValue` to 
// manipulate and retrieve the value of 'count'. 

// Demonstrate that 'count' is not accessible from the global scope.

let counterModule = (function () {
let count = 0;

function increment () {
    count++
    return count
}

function decrement () {
    count--
    return count
}

function getValue () {
    return count
}

return {
    increment: increment,
    decrement: decrement,
    getValue: getValue
}

})()

// When ready, use the code below for testing
counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue()); // Outputs: 2

counterModule.decrement();
console.log(counterModule.getValue()); // Outputs: 1

console.log(typeof count); // Outputs: 'undefined'
