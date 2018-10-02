console.log("CODING CHALLENGE 4: BMI CALC")

var Mark = {
  firstName: "Mark",
  lastName: "Chad",
  weight: 180,
  height: 120,

  findBMIMark: function(){
    this.BMIMark = this.weight/this.height^2;
  }
}
Mark.findBMIMark();
console.log(Mark);

var John = {
  firstName: "John",
  lastName: "Bobby",
  weight: 200,
  height: 160,

  findBMIJohn: function(){
    this.BMIJohn = this.weight/this.height^2;
  }
}
John.findBMIJohn();
console.log(John);
