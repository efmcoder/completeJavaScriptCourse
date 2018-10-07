console.log("COUNT UP LOOP");
for (var i = 0; i <= 10; i++) {
  console.log("The number is " + i);
}


console.log("COUNT DOWN LOOP");
//When you count down, you start from the top, so var i = 10;
//You want to count & print all numbers greater than 0, so i > 0;
//You want to decrease by 1 number at a time, so i--;
//Use >= DO NOT USE => as it will create an endless loop
//= sign always has to be on the right
for (var i = 10; i >= 0; i--){
  console.log("The number is " + i );
}

console.log("WILL ONLY COUNT IF THERE ARE AT LEAST 2 ELEMENTS")
var cars = ["BMW", "Volvo", "Mercedes", "Toyota"];
var len = cars.length;
cars.push("Saab");
for (var i = 2; i < len; i++){ //do not use i-- or u'll have an endless loop
console.log(cars);
};


console.log("COUNT AND INCREASE BY 5 FROM 0");
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}

console.log("COUNT AND DECREMENT BY 5 FROM 100");
for (var i = 100; i >= 0; i -= 5) {
  console.log(i);
}
