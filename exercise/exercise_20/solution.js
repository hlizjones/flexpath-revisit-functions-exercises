function composeFunctions(...fns) {
  return function (initialValue) {
    return fns.reduceRight((value, fn) => fn(value), initialValue);
  };
}

// Testing
const double = (x) => x * 2;
const increment = (x) => x + 1;
const square = (x) => x * x;

const composedFunction = composeFunctions(double, increment, square);

console.log(composedFunction(3)); // Outputs: 20
// Explanation: square(3) = 9, increment(9) = 10, double(10) = 20
