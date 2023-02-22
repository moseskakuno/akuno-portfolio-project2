import readlineSync from "readline-sync"; 
/* let input = require('readline-sync'); */
let firstNumber = readlineSync.question("Pease enter a number", firstNumber);
console.log(firstNumber);
let secondNumber = readlineSync.question("Please enter a number", secondNumber);
console.log(secondNumber);
let thirdNumber = readlineSync.question("Pease enter a number", thirdNumber);
console.log(thirdNumber);
let fourthNumber = readlineSync.question("Please enter a number", fourthNumber);
console.log(fourthNumber);
let sum = firstNumber + secondNumber + thirdNumber + fourthNumber;
console.log(sum);

