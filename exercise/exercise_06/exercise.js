// Write a function `modifyValues` that attempts to modify a number and 
// an object passed to it. 

// Demonstrate how primitives and objects are handled differently 
// when passed as arguments to a function.

function modifyValues(num, obj) {
  num += 1
  obj.name = "Changed object"
}

let originalNum = 3
let originalObj = {name: "Original object"}
console.log(`Before`, originalNum, originalObj)
modifyValues(originalNum, originalObj)
console.log(`After`, originalNum, originalObj)