const input = document.getElementById("input");
const button = document.getElementById("submit");
const form = document.getElementById("guessForm");
const output = document.querySelector("output")
let min = 1;
let max = 25;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = input.value // gets the valu efrom the input field
    const userGuess = parseInt(userInput, 10) // convert userinput from string to integer
    const computersGuess = parseInt(computerGuess(), 10)

    function computerGuess(min, max) {
        return Math.floor(Math.random() * (25 - 1));
    } 
    // document.write(userGuess, + " " + computerGuess())

    if(userGuess < computersGuess) {
        console.log("You Lost")
    } else if (userGuess > computersGuess) {
        console.log("You Lost")
    } else {
        console.log("You WON!!")
    }

    console.log("My guess is " + userGuess)
    console.log("Computer's guess is " + computerGuess())
})