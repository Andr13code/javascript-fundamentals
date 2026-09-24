// const readline = require('readline-sync');

// const numbers = {};


// for (let i = 0; i < 5; i++) {
//     const angka = +readline.question('input a number: ');
//     numbers[angka] = true;
// }

// console.log('number yang ke sort: ')

// for (const key in numbers) { 
// console.log(key);
// }






// const temperature = 20;

// const result = 
// temperature >= 37 ? 'sick' : 
// temperature >= 35 ? 'cold' : 
// 'dead';


// console.log(result);



// const person = {
//     name: 'andreas',
//     age: 25,
// };

// person.sayHello = function () {
//     console.log('hallo semuanya');
// };

// person.jump = function () {
//     console.log('ayo lompat');
// };

// person.sayHello();
// person.jump();
// console.log(person);


// const rectangle = {
//     width: 5,
//     height: 10,
//     getArea: function() {
//         return this.width * this.height;
//     },
// };


// console.log(rectangle.getArea());
// rectangle.getArea;


const person = {
    name: 'Andreas',
    age: 30,
    beratBadan: 84,
    tinggiBadan: 184 / 100,
    beratIdeal: function() {
    return person.beratBadan / [person.tinggiBadan * person.tinggiBadan];
    }
};

console.log(person.beratIdeal().toFixed(2));