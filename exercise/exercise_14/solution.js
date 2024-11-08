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
console.log(person.regularFunction()); // Outputs: 'My name is Alice'
console.log(person.arrowFunction()); // Outputs: 'My name is undefined'
