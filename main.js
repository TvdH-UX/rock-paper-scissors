// Generate computer answer
// generate random number between 0 and 2 (inclusive)
// put the number into the function
// if the number is 0, computer picks rock
// if the number is 1, computer picks paper
// if the number is 2, computer picks scissors

function randomInt(min = 1, max = 3){
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
};

function computerPlay(){
    result = randomInt();
    if (result === 1){
        return "Rock";
    } else if (result === 2) {
        return "Paper";
    } else if (result === 3) {
        return "Scissors";
    }
};


// Play round of Rock Paper Scissors
// ask player for input
// normalize player input to lowercase
// capitalize first letter of player input
// put player input into play round function
// put computer answer into play round function
// compare answers
// print result of the game for the player

// Function which capitalizes first letter
function toCapitalized(string){
    string = string.toLowerCase();
    let firstPart = string.slice(0,1);
    firstPart = firstPart.toUpperCase();
    let secondPart = string.slice(1);
    return firstPart + secondPart;
}

// Function which receives user input
function playerInput(){
    let playerInput = prompt("Rock, Paper or Scissors?");
    playerInput = toCapitalized(playerInput);
    return playerInput;
};

// Variables to save both responses
let computerSelection;
let playerSelection;

// const computerSelection = computerPlay();
// const playerSelection = playerInput();

// Function to play a single round
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerInput();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper";
    } else {
        return "Please enter either Rock, Paper or Scissors"
    }
};

console.log(playRound(playerSelection, computerSelection));

// Function to play five rounds
function game(){

}