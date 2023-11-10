let dealerSum = 0;
let yourSum = 0;
let dealerAceCount = 0;
let yourAceCount = 0;

const deck = [];

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();

    document.getElementById("hit").addEventListener("click", function() {
        hit();
    });

    document.getElementById("hold").addEventListener("click", function() {
        hold();
    });
};


function buildDeck() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
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

function startGame() {
    // Reset game state and UI
    resetGameState();
    resetUI();

    // Deal initial cards
    dealCard("player");
    dealCard("dealer");
    dealCard("player");
    dealCard("dealer", true); // Second dealer card is facedown

    updateSums();
    // Check for Blackjack or further actions
}

function resetGameState() {
    dealerSum = 0;
    yourSum = 0;
    dealerAceCount = 0;
    yourAceCount = 0;
}

function resetUI() {
    document.getElementById("dealer-cards").innerHTML = '<img src="./images/BACK.png" alt="">';
    document.getElementById("your-cards").innerHTML = "";
    document.getElementById("dealer-sum").textContent = "";
    document.getElementById("your-sum").textContent = "";
    document.getElementById("results").textContent = "";
}

function dealCard(player, isFaceDown = false) {
    // Deal the card and update UI
    const card = deck.pop();
    let cardValue = getCardValue(card);

    if (player === "player") {
        yourSum += cardValue;
        if (card.startsWith("A")) yourAceCount++;
        // Add card image to player's cards div
        document.getElementById("your-cards").innerHTML += `<img src="./images/${card}.png" alt="${card}">`;
    } else {
        if (!isFaceDown) {
            dealerSum += cardValue;
            if (card.startsWith("A")) dealerAceCount++;
            // Add card image to dealer's cards div
            document.getElementById("dealer-cards").innerHTML += `<img src="./images/${card}.png" alt="${card}">`;
        }
    }
}

function getCardValue(card) {
    const value = card.split("-")[0]; // Split the card string and get the value part

    if (value === "A") {
        return 11; // Aces can be 1 or 11, but we'll handle this later
    } else if (value === "J" || value === "Q" || value === "K") {
        return 10; // Face cards are worth 10
    } else {
        return parseInt(value); // Number cards are worth their face value
    }
}


function updateSums() {
    // Update the sums on the UI
    document.getElementById("your-sum").textContent = yourSum;
    document.getElementById("dealer-sum").textContent = dealerSum;
}

function hit() {
    // Add a new card to the player's hand
    dealCard("player");

    // Update the player's sum and check for bust
    if (yourSum > 21) {
        document.getElementById("your-sum").innerHTML = "BUST!"
    } else if (yourSum === 21) {
        document.getElementById("your-sum").innerHTML = "21!"
    } else (document.getElementById("your-sum").innerHTML = "Hit Again Or Hold!")

    // Update the UI accordingly
    // ...
}

function hold() {
    // End the player's turn and start the dealer's turn
    // ...

    // Determine the outcome of the game
    // ...

    // Update the UI to show the results
    // ...
}

