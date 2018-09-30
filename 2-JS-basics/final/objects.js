//compare this to the array.js
//objects vs arrays


var me = {
  firstName: "Faith",
  lastName: "Noah",
  birthYear: 1980,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: true     //no comma or semi-colon needed on last item
};

// i) accessing the items in the object via dot notation
console.log(me.firstName);

// ii) accessing the items in the object using the brackets
console.log(me["firstName"]);
console.log(me["lastName"]);
console.log(me["birthYear"]);

// iii) accessing the items using a variable
var x = "birthYear";
console.log(me[x]);

console.log(me.job = "trucker");

// Now we can access and replace the items in the object
me.job = "model"; //using dot notation or
me["isMarried"] = false; //using brackets
console.log(me);

//Adding a new object. Instead of using the {} you can use
// new Object() to create an object.
//Question: can we do this all the time instead of ever using {} ??

var jane = new Object();
jane.firstName = "Jane"; //using dot notation
jane.birthYear = 1970; //using dot notation
jane["lastName"] = "Smith"; //using brackets
console.log(jane);
