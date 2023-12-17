// Computer move generator //

let computerSelection;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
     if (randomNumber == 0) {
        computerSelection = "rock";
    } else if (randomNumber == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}
//*************************************//

// Selects users move //
let userSelection;
let playerSelection;

function getUserChoice() {
    userSelection = prompt("What's your move? Rock Paper or Scissors?");
    playerSelection = userSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection
}

//*************************************//


// Calculates who won the round & score tracker //

let replay = false;
let computerScore = 0;
let playerScore = 0;

function whoWon() {
    if (playerSelection == "rock" && computerSelection == "rock") {
        replayRound();
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou win!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore = computerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou lose!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        replayRound();
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou lose!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou win!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        replayRound();
        return replay;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou lose!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1;
        alert("You chose: " + userSelection + " the Computer chose: " + computerSelection +"\nYou win!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    }
}


//*************************************//

//Tie breaker situation function//

function replayRound() {
        alert("That round was a draw");
        getComputerChoice();
        getUserChoice();
        whoWon();
        return replay;
}

//*************************************//

//Function to play round//
function playRound () {
    getComputerChoice();
    getUserChoice();
    whoWon();
}

//*************************************//

function gameLaunch() {
    while (playerScore <5 && computerScore <5) {
        playRound();
    }
    if (playerScore > computerScore) {
        alert("Congratulations! You beat the computer!\nFinal Score\nPlayer Score: " + playerScore + " Computer Score: " + computerScore)
    } else {
        alert("Game Over! Computer wins!\nFinal Score\nPlayer Score: " + playerScore + " Computer Score: " + computerScore)
    }
}
