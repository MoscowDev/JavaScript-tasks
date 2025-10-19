// import prompt
let prompt = require('prompt-sync')();

// FACTORIAL OF A NUMBER

console.log("Enter a number: ");
let number = parseInt(prompt(""));

let factorial = 1;
for (let count = 1; count <= number; number--) {

factorial = factorial * number;

}
console.log("The factorial of the number is: " + factorial);


// ARMSTRONG NUMBER

console.log("Enter 3 number: ");
let number1 = parseInt(prompt(""));


let armstrong1 = 0;
let armstrong2 = 0;
let armstrong3 = 0;


armstrong1 = number1 % 10;
armstrong2 = Math.floor((number1 % 100) / 10);
armstrong3 = Math.floor((number1 % 1000) / 100);

let sum = (armstrong1 * armstrong1 * armstrong1) + (armstrong2 * armstrong2 * armstrong2) + (armstrong3 * armstrong3 * armstrong3);
if (number1 == sum){
console.log(number1 + " Is armstrong");
}
else{
console.log(number1 + " is not armstrong");
}



// PERFECT NUMBER

console.log("Enter number: ");
let number2 = parseInt(prompt(""));


let summation = 0;



for (let count = 1; count < number2; count++){
if (number2 % count == 0) {
     summation += count;

}
}

if (number2 == summation) {
console.log(number2 + " is a Perfect Number");
} else {
console.log(number2 + " is not a Perfect Number");
}



// ARMSTRONG BETWEEN 1 & 1000

console.log("Armstrong numbers between 1 and 1000:");
for (let warm = 1; warm <= 1000; warm++){
    let temp = warm;
    let sumArm = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sumArm += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if (sumArm == warm) {
        console.log(warm);
    }
}



// STRONG NUMBER

console.log("Enter 3 number: ");
let number3 = parseInt(prompt(""));

let strong1 = 0;
let strong2 = 0;
let strong3 = 0;

strong1 = number3 % 10;
strong2 = Math.floor((number3 % 100) / 10);
strong3 = Math.floor((number3 % 1000) / 100);

let factor1 = 1;
for (let count = 1; count <= strong1; strong1--) {

factor1 = factor1 * strong1;

}

let factor2 = 1;
for (let count = 1; count <= strong2; strong2--) {

factor2 = factor2 * strong2;

}

let factor3 = 1;
for (let count = 1; count <= strong3; strong3--) {

factor3 = factor3 * strong3;

}

let summer = factor1 + factor2 + factor3;
if (number3 == summer){
console.log(number3 + " Is a strong number");
}
else{
console.log(number3 + " is not a strong number");
}



// LEAP YEAR
console.log("Enter year: ");
let year = parseInt(prompt(""));

        
if(year % 4 == 0 && year % 100 != 0){
console.log(year + " Is a leap year ");

}

else if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){

console.log(year + " Is a leap year ");
}
else{
console.log(year + " Is not a leap year ");
}



// PERFECT NUMBER BETWEEN 1 AND 1000

console.log("Perfect numbers between 1 and 1000 are:");
for (let number4 = 1; number4 <= 1000; number4++) {
      let addition = 0;
for (let count = 1; count < number4; count++){

if (number4 % count == 0) {
     addition += count;

}
}
if(addition == number4){
console.log("perfect numbers are: " + number4);
}
}
