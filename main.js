// select buttons in html file
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// Select result sections in html file
const playerSection = document.querySelector(".playerSection");
const computerSection = document.querySelector(".computerSection");
const tiesSection = document.querySelector(".tiesSection");
const winnerSection = document.querySelector(".winnerSection");

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

// Variables to save both responses
let computerSelection;
let playerSelection;

// Function to play a single round
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    // console.log("Computer picks: " + computerSelection);
    // console.log("Player picks: " + playerSelection);
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        result = 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        result = 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        result = 1;
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        result = 2;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        result = 2;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        result = 2;
    } else if (playerSelection == computerSelection){
        result = 3;
    };
    return result;
};

// Variables to save scores
let pScore = 0;
let cScore = 0;
let ties = 0;

// Creating paragraph elements to append to result sections
const pScoreCounter = document.createElement('p');
pScoreCounter.textContent = pScore;
playerSection.appendChild(pScoreCounter);

const cScoreCounter = document.createElement('p');
cScoreCounter.textContent = cScore;
computerSection.appendChild(cScoreCounter);

const tiesCounter = document.createElement('p');
tiesCounter.textContent = ties;
tiesSection.appendChild(tiesCounter);

const winningPlayer = document.createElement('p');

// Calculate score and decide winner
function calcScore (result){
    if (pScore < 5 && cScore < 5){
        if (result === 1){
            pScore++;
            pScoreCounter.textContent = pScore;
            if (pScore === 5){
                winningPlayer.textContent = "You win the game!"
                winnerSection.appendChild(winningPlayer);
            };
        } else if (result === 2){
            cScore++;
            cScoreCounter.textContent = cScore;
            if (cScore === 5){
                winningPlayer.textContent = "The computer wins the game!"
                winnerSection.appendChild(winningPlayer);
            }
        } else {
            ties++;
            tiesCounter.textContent = ties;
        };
    } else {
        alert("Please reload the page to start a new game")
    }
}

// Make buttons start a round and calculate score
btnRock.addEventListener("click", () => {
    calcScore(playRound("Rock", computerSelection));
});

btnPaper.addEventListener("click", () => {
    calcScore(playRound("Paper", computerSelection));
});

btnScissors.addEventListener("click", () => {
    calcScore(playRound("Scissors", computerSelection));
});