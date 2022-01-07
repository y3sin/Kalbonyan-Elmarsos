//Print If Visitors Are Vegans
let isGuestOneVegan = true;
let isGuestTwoVegan = false;
//Printing The Messages
if(isGuestOneVegan && isGuestTwoVegan) {
  console.log(`Only offer up vegan dishes.`);
} else if(!isGuestOneVegan && !isGuestTwoVegan) {
  console.log(`Offer up any thing on the menue.`);
} else {
  console.log(`Make sure to offer up some vegan options.`);
}
