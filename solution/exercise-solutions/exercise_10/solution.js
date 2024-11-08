function processArray(arr, callback) {
  const result = [];
  for (let element of arr) {
    result.push(callback(element));
  }
  return result;
}

// Testing
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, function (num) {
  return num * num;
});

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
