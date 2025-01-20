// Rewrite the `multiplyAll` function from Exercise 8 using 
// rest parameters instead of the arguments object.

function multiplyAll (...args) {
    let result = args.reduce((total, current) =>
    total + current)
    return result
}

let total = multiplyAll(1,2,3,4)

console.log(total)