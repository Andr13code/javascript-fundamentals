const readline = require('readline-sync');

const enterNumber = readline.question(`enter a number: `)

const inputNumber = +(enterNumber);

    if (inputNumber % 2 === 0) {
    console.log(`${enterNumber} is even`);
    }
    else {
    console.log(`${enterNumber} is odd`);
    }