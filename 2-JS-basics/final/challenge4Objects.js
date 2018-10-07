console.log("CODING CHALLENGE 4: BMI CALC")
//save BMI to the object
//compare who has the highest bmiIsHigher
//return BMI from the method
var Mark = {
  fullName: "Mark Chad",
  weight: 192,
  height: 1.95,
  calcBMI: function(){
    this.BMI = Math.round(this.weight/(this.height*this.height));
    //return this.bmi; //this seems to have no effect if taken out
  }
}
//Mark.calcBMIMark();
//console.log(Mark);

var John = {
  fullName: "John Bobby",
  weight: 192,
  height: 1.95,

  calcBMI: function(){
    this.BMI = Math.round(this.weight/(this.height*this.height));
    //return this.bmi; //this seems to have no effect if taken out
  }
}

//John.calcBMI(); We can use this. See OPTION 2 BELOW
//Mark.calcBMI(); We can use this. See OPTION 2 BELOW

console.log(Mark);
console.log(John);

console.log("HOW TO COMPARE THE BMI's - OPTION 1: USING DOT-NOTATION");
if (Mark.BMI > John.BMI){
  console.log(Mark.fullName + " has a higher BMI of " + Mark.BMI);
} else if (Mark.BMI < John.BMI) {
  console.log(Mark.fullName + " has a lower BMI of " + Mark.BMI);
} else{
  console.log("They have the same BMI");
};

console.log("OPTION 2: USE CALCULATION RIGHT IN THE COMPARISON STATEMENT");
if (Mark.calcBMI() > John.calcBMI()){
  console.log(Mark.fullName + " has a higher BMI of " + Mark.BMI);
} else if (Mark.calcBMI() < John.calcBMI()) {
  console.log(Mark.fullName + " has a lower BMI of " + Mark.BMI);
} else{
  console.log("They have the same BMI");
};
