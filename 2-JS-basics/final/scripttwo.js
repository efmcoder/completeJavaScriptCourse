console.log("Hello Dear! How are you doing?");

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
