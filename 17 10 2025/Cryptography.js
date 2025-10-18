let prompt = require('prompt-sync')()
const number = prompt("Enter a 4 digit number: ");

let value1 = number /1000;
let value2 = (number%1000)/100;
let value3 = (number%100)/10;
let value4 = number % 10;


let newValue1 = (value1 + 7) % 10;
let newValue2 = (value2 + 7) % 10;
let newValue3 = (value3 + 7) % 10;
let newValue4 = (value4 + 7)% 10;



let swap = newValue1;
swap = newValue3;
newValue3 = swap;

let swap2 = newValue2;
swap2 = newValue4;
newValue4 = swap2;

console.log(newValue1);
console.log(newValue2);
console.log(newValue3);
console.log(newValue4);
