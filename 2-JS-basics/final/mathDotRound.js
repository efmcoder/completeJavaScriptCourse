console.log("Using Math.round in JavaScript arrays");

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
//Misc calculation
console.log(Math.round(124*.15));
console.log(124*.15);
//end of misc calculation

//Finding the tip amount plus the total bill
var totalBill = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];
console.log(tips, totalBill);

//A different way to do the above is to create empty arrays, then use the push method to add the amounts to the array
