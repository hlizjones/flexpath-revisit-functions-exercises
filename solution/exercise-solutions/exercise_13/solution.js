const person = {
  name: "Alice",
  regularFunction: function () {
    return `My name is ${this.name}`;
  },
  arrowFunction: () => {
    return `My name is ${this.name}`;
  },
};

// Testing
// Outputs: 'My name is Alice'
console.log(person.regularFunction());
// Outputs: 'My name is undefined', throws error in strict mode
console.log(person.arrowFunction());
