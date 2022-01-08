// Declare The Default Value Of Total
let tipTotal = 100;
// Declare The Percent Variable
let tipPercent;
// Declare The Counting Function
let tipCount = function (total, percent = 0.2) { return percent * total };

// Print The Function With The Default Value For Tip Percent [20%]
console.log("The needed tip is: " +       tipCount(tipTotal)       + "$");   // 20% * 100$ ==> [ 20$ ]

// Setting TipPercent Value To [ 15% ] And Print The Function
tipPercent = 0.15;
console.log("The needed tip is: " + tipCount(tipTotal, tipPercent) + "$");   // 15% * 100$ ==> [ 15$ ]

// Setting TipTotal Value To [ 200$ ] And Print The Function
tipTotal = 200;
console.log("The needed tip is: " + tipCount(tipTotal, tipPercent) + "$");   // 15% * 200$ ==> [ 30$ ]
