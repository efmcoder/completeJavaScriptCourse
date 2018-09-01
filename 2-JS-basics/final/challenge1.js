/*
Mark and John are trying to compare their BMI which is calculated
BMI = mass / height^2
mass in kg and height in meters.
1. Store Mark and John's mass and height in variables
2. Calculate both their BMI's
3. Print a string to the console for whose BMI is higher - use true/false
*/
var massMark = 80;
var heightMark = 3;
var massJohn = 80;
var heightJohn = 4;

var bmiMark = massMark/heightMark^2;
var bmiJohn = massJohn/heightJohn^2;

console.log("Mark's BMI is " + bmiMark + " and John's BMI is " + bmiJohn);

var bmiIsHigher = bmiMark >= bmiJohn;
console.log(bmiIsHigher);

if(bmiMark > bmiJohn)
{
  console.log("Mark's BMI is higher than John's");
  }else {
    console.log("John's BMI is higher than Mark's");
}
