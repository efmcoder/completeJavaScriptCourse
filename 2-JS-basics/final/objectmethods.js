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
console.log(john.findAge(john.birthYear)); //so why not use john's birthday, we already created a name for it

//arrays also have methods, so arrays in JS are objects as well
