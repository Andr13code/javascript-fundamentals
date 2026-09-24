const readline = require('readline-sync');

const firstInput = +readline.question('Enter first number: ');
const secondInput = +readline.question('Enter second number: ');
const thirdInput = +readline.question('Enter third number: ');

const total = (firstInput + secondInput + thirdInput)
const totalNumber = 3;

const average = total / totalNumber;

console.log(`The average of ${firstInput}, ${secondInput}, ${thirdInput} is ${average}`);

