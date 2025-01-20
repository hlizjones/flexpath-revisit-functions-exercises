// Write a recursive function `flattenArray` that takes a deeply nested array 
// and returns a new, flat array containing all the elements. 

// Explain the importance of the base case in your recursive function.

function flattenArray (arr) {
    let newArr = [];
    for (let val of arr) { 
        if (Array.isArray(val)) { // Without base case, flattenArray would be called indefinitely
            let result = flattenArray(val)
            newArr = newArr.concat(result)
        } else {
            newArr.push(val)
        }
    }
    return newArr
}

// When ready, use the code below for testing
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4, 5]
