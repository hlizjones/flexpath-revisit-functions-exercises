// Incorrect version (closure issue)
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Number:", i);
  }, i * 1000);
}

// Corrected version using IIFE
for (var i = 1; i <= 5; i++) {
  (function (num) {
    setTimeout(function () {
      console.log("Number:", num);
    }, num * 1000);
  })(i);
}

// Alternatively, using let
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Number:", i);
  }, i * 1000);
}
