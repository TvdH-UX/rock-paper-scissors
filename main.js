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

    function playerInput(){
        let playerInput = prompt("Rock, Paper or Scissors?");
        playerInput = toCapitalized(playerInput);
        return playerInput;
    };

    const computerSelection = computerPlay();
    const playerSelection = playerInput();

    function playRound(playerSelection, computerSelection){
        console.log(playerSelection);
    }

    console.log(playRound(playerSelection, computerSelection));