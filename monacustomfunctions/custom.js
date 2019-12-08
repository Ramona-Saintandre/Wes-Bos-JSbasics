// 'use strict';
function calBill(billAmount, taxRate){
    console.log('Running Calculate Bill!!');
    const total = billAmount * 1 + taxRate;
    return total;
}

// function call ore **run**
const billTotal = calBill(100, 0.15);
const billTotal2 = calBill(200, 013);
console.log(billTotal);
