// select buttons in html file
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");


btnRock.addEventListener("click", () => {
    console.log("rock button");
});

btnPaper.addEventListener("click", () => {
    console.log("paper button");
});

btnScissors.addEventListener("click", () => {
    console.log("scissors button");
});

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

// Function to play a single round
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerInput();
    console.log("Computer picks: " + computerSelection);
    console.log("Player picks: " + playerSelection);
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You win! Rock beats Scissors");
        result = 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You win! Paper beats Rock");
        result = 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You win! Scissors beats Paper");
        result = 1;
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        console.log("You lose! Paper beats Rock");
        result = 2;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You lose! Scissors beats Paper");
        result = 2;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log("You lose! Rock beats Scissors");
        result = 2;
    } else if (playerSelection == computerSelection){
        console.log("It's a tie!");
        result = 3;
    };
    return result;
};

// Function to play five rounds

// Start the first round of play
// Compare answers of player and computer
// Declare round winner or tie
// Add point to their win counter
// Play until five rounds have been played
// Print results and declare ultimate winner

// function game(){
//     let round = 0;
//     let playerPoints = 0;
//     let computerPoints = 0;
//     let ties = 0;
//     for (let i = 0; i < 5; i++){
//         round++;
//         console.log("Round: " + round);
//         let roundResult = playRound(playerSelection, computerSelection);
//         if (roundResult === 1){
//             playerPoints++;
//         } else if (roundResult === 2){
//             computerPoints++;
//         } else {
//             ties++;
//         };
//     };
//     console.log("Results:");
//     console.log("Player: " + playerPoints);
//     console.log("Computer: " + computerPoints);
//     console.log("Ties: " + ties);
//     if (playerPoints > computerPoints){
//         return "You win!"
//     } else if (playerPoints < computerPoints){
//         return "You lose!"
//     } else {
//         return "No winner was decided!"
//     };
// };

// game();