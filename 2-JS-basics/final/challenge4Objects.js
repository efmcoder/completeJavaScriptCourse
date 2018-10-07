console.log("CODING CHALLENGE 4: BMI CALC")
//save BMI to the object
//compare who has the highest bmiIsHigher
//return BMI from the method
var Mark = {
  fullName: "Mark Chad",
  weight: 78,
  height: 1.69,
  findBMI: function(){
    this.BMI = Math.round(this.weight/(this.height*this.height));
    return this.bmi;
  }
}
//Mark.findBMIMark();
//console.log(Mark);

var John = {
  fullName: "John Bobby",
  weight: 192,
  height: 1.95,

  findBMI: function(){
    this.BMI = Math.round(this.weight/(this.height*this.height));
    return this.bmi;
  }
}
//John.findBMIJohn(); //this is how we call the function
//console.log(John);

Mark.findBMI();
John.findBMI();
console.log(Mark);
console.log(John);

console.log("HOW TO COMPARE THE BMI's");
if (Mark.BMI > John.BMI){
  console.log(Mark.fullName + " has a higher BMI of " + Mark.BMI);
} else if (Mark.BMI < John.BMI) {
  console.log(Mark.fullName + " has a lower BMI of " + Mark.BMI);

};
