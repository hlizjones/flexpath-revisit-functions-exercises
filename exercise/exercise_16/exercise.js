// Create a constructor function `Person` that accepts 'name' and 'age'. 

// Add a method `introduce` to its prototype that returns a string 
// introducing the person. 

// Demonstrate how instances share methods through the prototype.

function Person(name, age) {
    this.name = name,
    this.age = age
}

Person.prototype.introduce = function() {
    console.log(`Hi! I am ${this.name}. I am ${this.age} years old.`)
}

let hannah = new Person("Hannah", 26)
let holly = new Person("Holly", 21)

console.log(hannah)
console.log(holly)

hannah.introduce()
holly.introduce()