const input = document.getElementById("input");
const button = document.getElementById("submit");
const form = document.getElementById("guessForm");
let min = 1;
let max = 25;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = input.value // gets the valu efrom the input field
    const userGuess = parseInt(userInput, 10) // convert userinput from string to integer

    function computerGuess(min, max) {
        return Math.floor(Math.random() * (25 - 1));
    } 
    document.write(userGuess, + " " + computerGuess())

    console.log("My guess is " + userGuess)
    console.log("Computer's guess is " + computerGuess())
})