function regularFunction() {
  console.log("Regular Function Arguments:", arguments);
}

const arrowFunction = () => {
  try {
    console.log("Arrow Function Arguments:", arguments);
  } catch (e) {
    console.error("Arrow Function Error:", e.message);
  }
};

// Testing
regularFunction(1, 2, 3); // Outputs: [Arguments] { '0': 1, '1': 2, '2': 3 }
arrowFunction(4, 5, 6); // Outputs error
