function modifyValues(num, obj) {
  num = num * 10;
  obj.value = obj.value * 10;
}

// Testing
let myNum = 5;
let myObj = { value: 5 };

modifyValues(myNum, myObj);

console.log(myNum); // Outputs: 5
console.log(myObj.value); // Outputs: 50
