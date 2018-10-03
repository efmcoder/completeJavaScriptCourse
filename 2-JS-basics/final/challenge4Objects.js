console.log("CODING CHALLENGE 4: BMI CALC")
var Mark = {
  firstName: "Mark",
  lastName: "Chad",
  weight: 80,
  height: 3,

  findBMIMark: function(){
    this.BMIMark = this.weight/(this.height*this.height);
  }
}
Mark.findBMIMark();
console.log(Mark);

var John = {
  firstName: "John",
  lastName: "Bobby",
  weight: 80,
  height: 4,

  findBMIJohn: function(){
    this.BMIJohn = this.weight/this.height;
  }
}
John.findBMIJohn();
console.log(John);
