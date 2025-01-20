// Write a function `multiplyAll` that accepts any number of numerical arguments 
// and returns their product. 

// Use the 'arguments' object to handle an indefinite number of arguments.

function multiplyAll () {
    let args = Array.from(arguments)
    let result = args.reduce((total, current) =>
    total + current)
    return result
}

let total = multiplyAll(1,2,3,4)

console.log(total)