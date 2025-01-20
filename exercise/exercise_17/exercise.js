// Demonstrate how the `arguments` object behaves differently in 
// regular functions versus arrow functions by writing a 
// function `compareArguments` that logs the `arguments` object in both cases.

function regularFunction () {
    console.log(arguments)
}

let arrowFunction = () => console.log(arguments)

regularFunction(1,2,3)
arrowFunction(1,2,3)