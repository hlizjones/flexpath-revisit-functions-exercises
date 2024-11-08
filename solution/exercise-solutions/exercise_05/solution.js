const counterModule = (function () {
  let count = 0;

  return {
    increment: function () {
      count += 1;
    },
    decrement: function () {
      count -= 1;
    },
    getValue: function () {
      return count;
    },
  };
})();

// Testing
counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue()); // Outputs: 2

counterModule.decrement();
console.log(counterModule.getValue()); // Outputs: 1

console.log(typeof count); // Outputs: 'undefined'
