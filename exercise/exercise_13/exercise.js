// Create an object with a method defined using an arrow function and 
// another method using a regular function. 

// Inside each method, attempt to access a property of the object using `this`. 

// Explain the results.

let obj = {
    name: "Hannah",
    printName: function () {
        console.log(this.name)
    },
    printNameArrow : () => console.log(this.name)
}

obj.printName()
obj.printNameArrow() // name is undefined because "this" refers to lobal scope not obj