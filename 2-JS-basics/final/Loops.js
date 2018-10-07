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

console.log("HOW TO PRINT THE ITEMS IN AN ARRAY USING A FOR LOOP");
var cars = ["BMW", "Volvo", "Mercedes", "Toyota"];
cars.push("Saab");
cars.unshift("Range Rover");
for (var i = 0; i < cars.length; i++){ //do not use i-- or u'll have an endless loop
console.log(cars[i]);
};


console.log("COUNT AND INCREASE BY 5 FROM 0");
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}

console.log("COUNT AND DECREMENT BY 5 FROM 100");
for (var i = 100; i >= 0; i -= 5) {
  console.log(i);
}

console.log("THE WHILE LOOP");
var i = 0;
while (i <= 10){
  console.log(i);
  i++;
}

console.log("THE WHILE LOOP TO PRINT ARRAYS");
var i = 0;
var cities = ["Lagos", "Kisumu", "Paris", "London", "Nairobi", "Mombasa"];
while (i < cities.length){
  console.log(cities[i]);
  i++;
}

console.log("PRINT JOHN ARRAY USING WHILE LOOP");
var john = ["John", "Smith", 1990, "Designer", false, "Blue"];
var i = 0;
while (i < john.length){
  console.log(john[i]);
  i++;
}

console.log("PRINT JOHN ARRAY USING FOR LOOP");
for (i = 0; i < john.length; i++){
  console.log(john[i]);
}

console.log("PRINT JOHN ARRAY USING FOR LOOP BUT PRINT ONLY STRINGS");
for (i = 0; i < john.length; i++){
  if (typeof john[i] !== "string") continue; //!== means DIFFERENT FROM
  console.log(john[i]);
}

console.log("PRINT JOHN ARRAY USING FOR LOOP BUT WHEN IT FINDS NON-STRING CHARACTERS, COUNT SHOULD STOP");
for (i = 0; i < john.length; i++){
  if (typeof john[i] !== "string") break; //!== means DIFFERENT FROM
  console.log(john[i]);
}

console.log("PRINT LOOP BUT STARTING FROM LAST ARRAY");
for (i = john.length - 1; i >= 0; i--){
  console.log(john[i]);
}
