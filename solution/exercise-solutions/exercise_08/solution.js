function multiplyAll() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

// Testing
console.log(multiplyAll(1, 2, 3, 4)); // Outputs: 24
console.log(multiplyAll(5, 5)); // Outputs: 25
console.log(multiplyAll(7)); // Outputs: 7
