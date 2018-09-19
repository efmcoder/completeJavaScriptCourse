console.log("CHALLENGE 2 - ARRAYS");

function calculateTip(bill){
    var tip;
    if (bill < 50){
      tip = 0.2;
    } else if (bill >= 50 && bill < 200){
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    return tip * bill;
}

//I prefer to use Math.round otherwise the answers will be over 10 decimal places long
console.log("Your tip will be " + ((Math.round(calculateTip(124)))) + " dollars");

var bills = [124, 48, 268];
var tips = [Math.round(calculateTip(bills[0])),
            Math.round(calculateTip(bills[1])),
            Math.round(calculateTip(bills[2]))];
console.log(tips);
console.log(Math.round(124*.15));
console.log(124*.15);
