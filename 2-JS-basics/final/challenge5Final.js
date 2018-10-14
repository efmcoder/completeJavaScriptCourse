console.log("CREATE A TIP CALCULATOR AND MORE")
/*John goes to five restaurants where the bills
are $124, $48, $268, $180 and $42.
He tips:
if <$50, 20%
$50 <= 15% <= $200
if > $200, 10%
*/
var bill = [124, 48, 268, 180, 42];
var tip;
function calculateTip(bill){
if (bill < 50)
{
  tip = 0.2;
} else if (bill >= 50 && bill < 200) {
    tip = 0.15;
} else {
  tip = 0.1;
}
return tip * bill; //need to return something or answer is undefined
};
console.log(calculateTip(124));
