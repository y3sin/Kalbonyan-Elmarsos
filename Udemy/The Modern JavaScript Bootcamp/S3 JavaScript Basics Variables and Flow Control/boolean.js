//Setting The Age
let age = 5;
//Declare The Case Of Sale Variable
let saleCase;
//Calculating The Case Of Sale
if(age <= 7 || age >= 65){
  saleCase = true;
} else {
  saleCase = false;
}
//Printing The Message
console.log(`Sale: ${saleCase}`);
if(age <= 7) {
  console.log(`You Are Child`);
} else if(age >=65) {
  console.log(`You Are Senior`);
}
