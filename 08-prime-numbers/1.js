const readline = require('readline-sync');

const enterNumber = +readline.question('Enter a number: ');

if (enterNumber % 2 === 0) {
    console.log(`${enterNumber} is even`);
} else {
    console.log(`${enterNumber} is odd`);
};
