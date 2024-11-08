// Calling function declaration before it's defined
console.log(declaredFunction()); // Outputs: "I am a declared function."

// Calling function expression before it's defined
try {
  console.log(expressFunction()); // Throws TypeError
} catch (e) {
  console.error(e); // Outputs: TypeError: expressFunction is not a function
}

// Function declaration
function declaredFunction() {
  return "I am a declared function.";
}

// Function expression
const expressFunction = function () {
  return "I am a function expression.";
};
