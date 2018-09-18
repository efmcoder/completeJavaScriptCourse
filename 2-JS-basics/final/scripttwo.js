/*console.log("Hello Dear! How are you doing?");

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 32;

console.log("His name is " + firstName + " " + lastName + " and he is " + age + " years old");

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


//variable mutation
age = "twenty eight";
job = "driver";
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//using a pop-up window instead - use alert
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//using prompt - user input
//create a variable for the prompt
//var lastName = prompt("What is her last name?");
console.log(firstName + " " + lastName);

var year, yearJohn, yearMark;
now = 2018;
johnYOB = 1990;
markYOB = 1987;
ageJohn = now - johnYOB;
ageMark = now - markYOB;
markOlder = ageMark > ageJohn;

console.log("John is " + ageJohn + " years old " + "and Mark is " + ageMark + " years old");
console.log(markOlder);

function factorial(number){
  if(number == 1){
    return number;
  } else{
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

//typeof operator
console.log(typeof markOlder);
console.log(typeof ageJohn);

var now = 2018;
var yobJohn = 1989;
var majorityAge = 18;

var isMajorityAge = now - yobJohn >= majorityAge;
console.log(isMajorityAge);

//If/else statements
var firstName = "Dave";
var civilStatus = "single";

if (civilStatus === "married")
  {
    console.log(firstName + " is married");
  } else
    {
      console.log(firstName + " is not married");
    };


var isMarried = true;
if (isMarried)
  {
    console.log(firstName + " is married");
  } else
    {
      console.log(firstName + " is not married");
    };

    var firstName = "John";
    var age = 31;

    if(age < 13){
      console.log(firstName + " is a boy");
    } else if(age >=13 && age < 20){
      console.log(firstName + " is a teenager");
    } else{
      console.log(firstName + " is a man");
    }
*/
//FUNCTIONS
/*function calculateAge(birthYear){
  return 2018 - birthYear;
}
console.log(calculateAge(1998));

var ageDuncan = calculateAge(1972);
var ageJane = calculateAge(1983);
var ageJunior = calculateAge(2007);
console.log(ageDuncan, ageJane, ageJunior);

function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + " retires in " + retirement + " years")
}
yearsUntilRetirement(1972, "Duncan");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/

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

//Array Different data types
var me = ["Noah", "Kim", 1981, "teacher", false];

me.push("blue"); //adds element to end
me.unshift("Doctor"); //adds element to front
me.pop(); //removes the last element
me.shift(); //to remove the first element
console.log(me);
