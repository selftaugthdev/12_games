// array with card elements
let MemoryCards = [
    {
        image: "./images/react.svg",
        name: "React",
    },
    {
        image: "./images/vue.svg",
        name: "Vue",
    },
    {
        image: "./images/angular.svg",
        name: "Angular",
    },
    {
        image: "./images/ember.svg",
        name: "Ember",
    },
    {
        image: "./images/nodejs.svg",
        name: "NodeJS",
    },
    {
        image: "./images/mithril.svg",
        name: "Mithril",
    }
]

let gameSection = document.querySelector("game");

// Double the array and shuffle it
MemoryCards = MemoryCards.concat(MemoryCards);
shuffle(MemoryCards); // Implement a shuffle function

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index lower than i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Function to create the cards
function createCards() {
    const gameBoard = document.getElementById("gameBoard");
    MemoryCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("memory-card");
        cardElement.dataset.name = card.name;

        // add backside of th ecard
        cardElement.innerHTML = `<img src="./images/js-badge.svg">`

        // Add an event listener to each card
        cardElement.addEventListener('click', flipcard());

        gameBoard.appendChild(cardElement);
    })
}

// Flipcard eveznt listener function
let firstCard, secondCard;
function flipcard() {
    // Flip the card and show the image

    // Logic to keep track and compare the two flipped cards

}

// call createCards in window onload
window.onload = function() {
    createCards();
}


// logic to only let 2 cards get clicked and compare those 2 cards



// If the 2 cards are NOT equal turn them back face down

// If they are teh same, leave them face UP and let the next 2 cards get picked