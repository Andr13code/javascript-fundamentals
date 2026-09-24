const readline = require('readline-sync');

const year = +readline.question('enter a year: ');

function determainChineseZodiacSign(year) {

const CHINESE_ZODIAK_COUNT = 12;
switch (year % CHINESE_ZODIAK_COUNT) {
    
        case 0: return 'Monkey';
        case 1: return 'Rooster';
        case 2: return 'Dog';
        case 3: return 'Pig';
        case 4: return 'Rat';
        case 5: return 'Ox';
        case 6: return 'Tiger';
        case 7: return 'Rabbit';
        case 8: return 'Dragon';
        case 9: return 'Snake';
        case 10: return 'Horse';
        case 11: return 'Sheep';
    }
}
const chineseZodiac = determainChineseZodiacSign(year);
console.log(`The Chinese zodiac for year ${year} is ${chineseZodiac}`);