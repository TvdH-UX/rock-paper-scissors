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
    let result = "";
    if (playerSelection === computerSelection){
        result = 3;
        console.log("It's a Tie!")
        return result;
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        result = 2;
        console.log("You Lose! Paper beats Rock")
        return result;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        result = 1;
        console.log("You Win! Rock beats Scissors")
        return result;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        result = 1;
        console.log("You Win! Paper beats Rock")
        return result;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        result = 2;
        console.log("You Lose! Scissors beats Paper")
        return result;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        result = 2;
        console.log("You Lose! Rock beats Scissors")
        return result;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        result = 1;
        console.log("You Win! Scissors beats Paper")
        return result;
    };
};

// console.log(playRound(playerSelection, computerSelection));

// Function to play five rounds
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++){
        playRound();
        if (result == 3){
            playerPoints++;
        } else if (result == 2){
            computerPoints++;
        } else {
            ties++;
        }
    };
    console.log("Results:");
    console.log("Player:" + playerPoints);
    console.log("Computer: " + computerPoints);
    console.log("Ties: " + ties);
    if (playerPoints > computerPoints){
        return "You win!"
    } else if (playerPoints < computerPoints){
        return "You lose!"
    } else {
        return "No winner was decided!"
    }
};