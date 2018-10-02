console.log("PART I: BASICS")
var fridge = {
  color: "white",
  make: "Whirlpool",
};
console.log(fridge);

var car = {
  make: "Toyota",
  model: "Avalon",
  year: 2018,
};
console.log(car);

console.log("PART II: TO ADD TO AN OBJECT. REMEMBER TO ADD TO AN ARRAY WE USED PUSH, ETC")
var car = {
  make: "Nissan",
  model: "Maxima",
  year: 2016,
  findAge: function()
      {
        this.age = 2018 - this.year;
      }
}
car.findAge();
console.log(car);

console.log("PART III: YET ANOTHER TRY")
var me = {
  firstName: "Faith",
  lastName: "Chai",
  birthYear: 1980,
  findAge: function ()
  {
    this.age = 2018 - this.birthYear;
  }
}
me.findAge();
console.log(me);

console.log("PART IV: 24 HOURS LATER, LET'S SEE IF I REMEMBER HOW TO DO THIS")
//i) create an object {}
var brother = {
  firstName : "James",
  lastName: "Noah",
  birthYear: 1982,
  job: "Engineer",

//ii) add age to brother OBJECT. First create a function
findAge: function(){
  this.age = 2018 - this.birthYear;
}
}
brother.findAge();
console.log(brother);
