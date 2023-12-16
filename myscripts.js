let interimChoice;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
     if (randomNumber == 0) {
        interimChoice = "rock";
        console.log(interimChoice);
    } else if (randomNumber == 1) {
        interimChoice = "paper";
        console.log(interimChoice);
    } else {
        interimChoice = "scissors";
        console.log(interimChoice);
    }
}

// getComputerChoice();

let userSelection;
let playerSelection;

function getUserChoice() {
    userSelection = prompt("What's your move? Rock Paper or Scissors?");
    playerSelection = userSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection
}

// getUserChoice();


let replay = false;

function whoWon() {
    if (playerSelection == "rock" && interimChoice == "rock") {
        console.log("It's a draw")
        replay = true;
        return replay;
    } else if (playerSelection == "rock" && interimChoice == "scissors") {
        console.log("You've won!")
    } else if (playerSelection == "rock" && interimChoice == "paper") {
        console.log("You've lost!")
    } else if (playerSelection == "paper" && interimChoice == "paper") {
        console.log("It's a draw")
        replay = true;
        return replay;
    } else if (playerSelection == "paper" && interimChoice == "scissors") {
        console.log("You've lost")
    } else if (playerSelection == "paper" && interimChoice == "rock") {
        console.log("You've won")
    } else if (playerSelection == "scissors" && interimChoice == "scissors") {
        console.log("It's a draw")
        replay = true;
        return replay;
    } else if (playerSelection == "scissors" && interimChoice == "rock") {
        console.log("You've lost")
    } else if (playerSelection == "scissors" && interimChoice == "paper") {
        console.log("You've won")
    }
}

// whoWon();

function tieBreaker () {
    replay = false;
    getComputerChoice();
    userSelection = prompt("That round was a draw\nRock Paper or Scissors?");
    playerSelection = userSelection.toLowerCase();
    console.log(playerSelection);
    whoWon();
}

if (replay = true) {
    tieBreaker();
}

function playRound () {
    getComputerChoice();
    getUserChoice();
    whoWon();
}

playRound();

// Need to work on putting all functions into play round function