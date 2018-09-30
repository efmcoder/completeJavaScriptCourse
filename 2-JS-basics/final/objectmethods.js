//Methods are functions attached to objects

var john =
{
  firstName: "John",
  lastName: "Smith",
  birthYear: 1980,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false, //no comma or semi-colon needed on last item
    //we want to get his age every year, so we should create a FUNCTION using
    //his birthYear since that doesn't change
  findAge: function(birthYear)
      {
        return 1990 - birthYear; //plug in the year to calculate from e.g., 1990
      }
};
console.log(john.findAge(1980)); //john's birthday
console.log("John is " + (john.findAge(john.birthYear)) + " years old"); //so why not use john's birthday, we already created a name for it

//arrays also have methods, so arrays in JS are objects as well
//only objects have Methods

console.log("OPTION II: USE this SO WE STOP REPEATING OURSELVES");
var sarah =
{
  firstName: "Sarah",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Janet", "Marco", "Bobby", "Emmma"],
  job: "Doctor",
  isMarried: false,
  findAge: function()
      {
        return 2018 - this.birthYear;
      }
};
console.log("Sarah is " + (sarah.findAge()) + " years old");
//how do we prevent stupid errors like entering a birth year that's after the year we want to calculate the age for?

console.log("OPTION III: CREATE A VARIABLE")
var age = sarah.findAge();
console.log(age);

console.log("OPTION IV: SEE OJECTMTHD2")
