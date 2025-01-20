// Write a function `greet` that accepts a 'greeting' message and logs it 
// along with the person's 'name' (this.name). 

// Create an object `user` with a 'name' property. 

// Use the Function prototype methods call(), apply(), and bind() 
// from the `greet` function to invoke `greet` with `user` as `this` 
// and explain the differences.

function greet (msg)  {
    console.log(`${msg} ${this.name}!`)
}

let user = {
    name: "Hannah"
}

let greetName = greet.bind({name : "Hannah"}, "Hello")//Specifies value of this and creates a new function

greetName()

greet.call(user, "Heya") //Specifies value of this without creating a new function

greet.apply(user, ["Hi"]) //Uses array as argument list