// Undefined For Variable
let name = "Yasin"

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined For Function Arguments
// Undefined As Function Return Default Value
let square = function (num) {
  console.log(num);
}

let result = square();
console.log(result);

// Null As Assined Value
let age = 27;

age = null;

console.log(age);
