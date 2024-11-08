const calculator = {
  currentValue: 0,
  incrementTraditional: function () {
    this.currentValue += 1;
    return this.currentValue;
  },
  incrementArrow: () => {
    this.currentValue += 1;
    return this.currentValue;
  },
};

// Testing
console.log(calculator.incrementTraditional()); // Outputs: 1
console.log(calculator.incrementArrow()); // Outputs: NaN
console.log(calculator.currentValue); // Outputs: 1
