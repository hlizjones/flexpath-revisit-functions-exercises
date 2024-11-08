// Global context (in non-strict mode)
console.log(this === window); // Outputs: true (in browsers)

// Inside an object method
const obj = {
  value: 42,
  getValue: function () {
    console.log(this === obj); // Outputs: true
    return this.value;
  },
};

console.log(obj.getValue()); // Outputs: 42

// Inside a regular function
function showThis() {
  console.log(this === window); // Outputs: true (in non-strict mode)
}

showThis();
