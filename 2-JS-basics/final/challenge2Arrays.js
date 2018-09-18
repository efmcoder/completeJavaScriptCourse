console.log("CHALLENGE 2 - ARRAYS");

function calculateTip(bill){
    var tip;
    if (bill < 50){
      tip = 0.2;
    } else if (tip >=50 && bill < 200){
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    return tip * bill;
}

console.log("Your tip will be " + (calculateTip(300)) + " dollars");
