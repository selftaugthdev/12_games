const input = document.getElementById("input");
const button = document.getElementById("submit");
const form = document.getElementById("guessForm");
const output = document.querySelector("output");
let min = 1;
let max = 25;

function computerGuess(min, max) {
    // The max - min + 1 ensures we can actually reach the maximum value.
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = input.value;
    const userGuess = parseInt(userInput, 10);
    const computersGuess = computerGuess(min, max);

    let resultMessage = ""; // Initialize a variable to hold the result message

    if(userGuess < computersGuess) {
        resultMessage = "You Lost! The computer's guess was higher.";
    } else if (userGuess > computersGuess) {
        resultMessage = "You Lost! The computer's guess was lower.";
    } else {
        resultMessage = "You Won! You guessed the same number as the computer.";
    }

    // Set the result message to the output element
    output.textContent = resultMessage;

    // Optional: You might want to log the guesses as well for clarity
    output.textContent += `\nYour guess: ${userGuess}\nComputer's guess: ${computersGuess}`;
});
