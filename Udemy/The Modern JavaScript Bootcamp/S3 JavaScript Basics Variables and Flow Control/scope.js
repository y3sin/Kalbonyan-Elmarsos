let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varOne);
console.log(varTwo);
console.log(varThree);
console.log(varFour);//       ==> Not Apper (out scope)
