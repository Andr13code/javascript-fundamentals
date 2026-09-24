// const readline = require('readline-sync');

// const firstInput = readline.question('what is first number : ');
// const secondInput = readline.question('what is second number : ');

// const firstNumber = Number(firstInput);
// const secondNumber = Number(secondInput);

// const result = firstNumber + secondNumber;

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(`what is ${firstInput} + ${secondInput}? ${result} `);

//     if (!isNaN(result)) {
//         console.log(`${firstInput} + ${secondInput} = ${result} is true`);
//     }

//     else {
//         console.log(`${firstInput} + ${secondInput} = ${result} is false`);
//     }

// DI ATAS ADALAH BUATAN PERTAMA

const readline = require('readline-sync');

const inputNumber1 = +readline.question('Enter first number: ');
const inputNumber2 = +readline.question('Enter second number: ');

const answer = +readline.question(`What is ${inputNumber1} + ${inputNumber2} ? `); 

if ((inputNumber1 + inputNumber2) === answer) {
    console.log(`${inputNumber1} + ${inputNumber2} = ${answer} is true`);
} else {
    console.log(`${inputNumber1} + ${inputNumber2} = ${answer} is false`);    
} ;

// INI ADALAH BUATAN KEDUA SENDIRI

// Enter first number: 2
// Enter second number: 5
// What is 2 + 5? 7
// 2 + 5 = 7 is true
