// 'use strict';

function calBill() {
    console.log('running calBill');
    const total = 100 * .15;
    return total;

}
const billTotal = calBill();
console.log('this is the total bill');
//This shows up as undefined because it is out of scope 
// console.log(total);