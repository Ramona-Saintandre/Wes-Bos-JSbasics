// 'use strict';

function calBill() {
    // console.log('running calBill');
    const total = 100 * .15;
    return total; //will not return, need to work on this

};
const billTotal = calBill();
console.log(`this is the total bill $${billTotal}`);
//This shows up as undefined because it is out of scope 
// console.log(total);
