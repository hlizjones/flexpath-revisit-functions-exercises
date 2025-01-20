// Implement a simple module called `stringModule` using an IIFE. 

// The module should expose methods `toUpperCase`, 
// `toLowerCase`, and `capitalize`, 
// operating on a private 'string' variable. 

// Demonstrate that the private 'string' cannot be accessed directly.

let stringModule = (function () {
    let string = "Hannah"
    return {
        toUpperCase : function () {
            return string.toUpperCase()
        },
        toLowerCase : function () {
            return string.toLowerCase()
        },
        capitalize : function () {
            let h = string.charAt(0)
            h.toUpperCase
            string.slice(0, 1, h)
            return string
        }
    }
})()

console.log(stringModule.toLowerCase())
console.log(stringModule.toUpperCase())
console.log(stringModule.capitalize())
console.log(typeof string)

