//Array Different data types
var me = ["Noah", "Kim", 1981, "designer", false];

me.push("blue"); //adds element to end
me.unshift("Doctor"); //adds element to front
//me.pop(); //removes the last element
//me.shift(); //to remove the first element
console.log(me);
//index or returns position of argument in array
console.log(me.indexOf(1981));
console.log(me.indexOf(23)); //if argument does not exist, it will return -1

var isDesigner = me.indexOf("designer") === -1 ? "John is NOT a designer":
"John IS a designer";
console.log(isDesigner);


var inputYear = 2018;
function calculateAge(birthYear){
  return inputYear - birthYear;
}
console.log(calculateAge(1998));

//function expressions
var whatYouDo = function(job, firstName){
  switch (job) {
    case "teacher":
      return firstName + " teaches kids to code";
    case "driver":
      return firstName + " drives an Uber in Sweden";
    case "diver":
      return firstName + " dives for Pearls in the Carribean";
    default:
      return firstName + " sits idle all day";
  }
}
console.log(whatYouDo("teacher", "Cody"));
console.log(whatYouDo("driver", "Saul"));
console.log(whatYouDo("diver", "Pauline"));
console.log(whatYouDo("retired", "Mark"));

//Initialize array
var names = ["John", "James", "Jane"];
var years = new Array(1990, 1984, 1988);
console.log(names);

//Manipulate array
console.log(names.length);
console.log(names[2]);
names[1] = "Ben";
names[5] = "Mary";
names[4] = "Gina";
names[names.length] = "Martin";
console.log(names);
