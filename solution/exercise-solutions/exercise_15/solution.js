const stringModule = (function () {
  let str = "";

  return {
    setString: function (value) {
      str = value;
    },
    toUpperCase: function () {
      return str.toUpperCase();
    },
    toLowerCase: function () {
      return str.toLowerCase();
    },
    capitalize: function () {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  };
})();

// Testing
stringModule.setString("hello world");
console.log(stringModule.toUpperCase()); // Outputs: 'HELLO WORLD'
console.log(stringModule.capitalize()); // Outputs: 'Hello world'

console.log(typeof str); // Outputs: 'undefined'
