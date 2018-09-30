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
        this.age = 2018 - this.birthYear;
      }
};

console.log("OPTION IV: THE WAY THE FUNCTION IS WRITTEN IS DIFFERENT FROM OBJECTMETHODS. THIS PRODUCES A RESULT WHERE THE age IS NOW PART OF THE OBJECT ARRAY")
sarah.findAge();
console.log(sarah);
