// Students Score, Total Possible Score
// 15/20 ==> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
}

let result = letterGrade(9, 20);
console.log("Your result is: " + result);
