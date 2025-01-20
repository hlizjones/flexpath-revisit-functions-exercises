// Implement a higher-order function `processArray` that takes an array and 
// a callback function. 

// The function should apply the callback to each element of the array and 
// return a new array with the results. 

// Use this function to square each element in an array of numbers.

function processArray (arr, callback) {
    let newArr = arr.map(element => {
        return callback(element)
    });
    return newArr
}

function square (num) {
    return num*num
}

let numbers = [2,3,4]

let result = processArray(numbers, square)

console.log(result)