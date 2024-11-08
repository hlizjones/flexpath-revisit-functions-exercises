function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

// Testing
const counter1 = createCounter();
console.log(counter1()); // Outputs: 1
console.log(counter1()); // Outputs: 2

const counter2 = createCounter();
console.log(counter2()); // Outputs: 1
console.log(counter1()); // Outputs: 3
