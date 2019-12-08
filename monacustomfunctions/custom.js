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

const monaTotal = 490;
const monaTax = .6;

function sayHiTo(){
    return `Hello ${firstName}`;

    const greeting = sayHiTo();
    console.log(greeting);
}
