const readline = require('readline-sync');


const RANK_COUNT = 13;
const SUIT_COUNT = 4;
const TOTAL_CARD = (RANK_COUNT * SUIT_COUNT);


let cardIndex;

do {    
    cardIndex = +readline.question('Enter card number: ');
} while (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= TOTAL_CARD);

const remainder = cardIndex % RANK_COUNT;

function determainRank(cardIndex) {
    switch(remainder) {
        case 0: return 'Ace'; 
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return remainder + 1;
        case 10: return 'Jack';
        case 11: return 'Queen';
        case 12: return 'King';
    }

    } 

function determainSuit(cardIndex) {
    switch (Math.floor(cardIndex / RANK_COUNT)) {
        case 0: return 'Spades';
        case 1: return 'Hearts';
        case 2: return 'Diamonds';
        case 3: return 'Clubs';
        }
    }

 
const rank = determainRank(cardIndex);
const suit = determainSuit(cardIndex);

console.log(`Card number ${cardIndex}: ${rank} of ${suit} `);
