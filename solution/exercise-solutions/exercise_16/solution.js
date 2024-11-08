function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
};

// Testing
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.introduce()); // Outputs: "Hello, I'm Alice and I'm 30 years old."
console.log(person2.introduce()); // Outputs: "Hello, I'm Bob and I'm 25 years old."

console.log(person1.introduce === person2.introduce); // Outputs: true
