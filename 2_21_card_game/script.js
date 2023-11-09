const dealerSum = 0;
const yourSum = 0;

const dealerAceCount = 0;
const yourAceCount = 0;

const deck = null;

window.onload = function() {
    buildDeck();
}

function buildDeck() {
    const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    const types = ["C", "D", "H", "S"];
    deck = [];
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
    console.log(deck);
}