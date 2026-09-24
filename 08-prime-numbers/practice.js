const readline = require('readline-sync');

const firstInput = readline.question('what is first number : ');
const secondInput = readline.question('what is second number : ');

const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

const result = firstNumber + secondNumber;

console.log(firstNumber);
console.log(secondNumber);
console.log(`what is ${firstInput} + ${secondInput}? ${result} `);

    if (!isNaN(result)) {
        console.log(`${firstInput} + ${secondInput} = ${result} is true`);
    }

    else {
        console.log(`${firstInput} + ${secondInput} = ${result} is false`);
    }