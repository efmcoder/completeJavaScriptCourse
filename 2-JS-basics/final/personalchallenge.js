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
