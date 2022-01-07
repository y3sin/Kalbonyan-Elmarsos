//Setting The Age
let age = 5;
//Declare Variables
let isChild = age <= 7;
let isSenior= age >=65;
let saleCase= isChild || isSenior;
//Print Values (Sale/Child/Senior)
console.log(`Sale Availability: ${saleCase}\n\n`);
console.log(`Child:             ${isChild}\n\n`);
console.log(`Senior:            ${isSenior}`);
