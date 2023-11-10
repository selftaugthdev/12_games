const dealerSum = 0;
const yourSum = 0;

const dealerAceCount = 0;
const yourAceCount = 0;

const deck = [];

window.onload = function() {
    buildDeck();
    shuffleDeck();
}

function buildDeck() {
    const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    const types = ["C", "D", "H", "S"];
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length); //this will giev a number between 0 and 1 * 52 (length of the deck) to give a number between 0 and 52
        // Swap the card at i with the card at randomIndex
        const temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
    }
    console.log(deck)
}