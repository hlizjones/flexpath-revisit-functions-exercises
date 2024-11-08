function multiplyAll(...nums) {
  return nums.reduce((product, num) => product * num, 1);
}

// Testing
console.log(multiplyAll(1, 2, 3, 4)); // Outputs: 24
console.log(multiplyAll(5, 5)); // Outputs: 25
console.log(multiplyAll(7)); // Outputs: 7
