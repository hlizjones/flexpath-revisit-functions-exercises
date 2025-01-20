// Create a function `createCounter` that returns another function. 

// The returned function should increment and return a 'counter' variable 
// that is not accessible from the global scope. 

// Demonstrate how closures retain access to outer variables.

function createCounter () {
    let counter = 0
    function increment () {
        counter++
        console.log(counter)
        return counter
    }
    return increment
}

let counter = createCounter()

counter()
counter()
counter()