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

getComputerChoice();

let userSelection = prompt("What's your move? Rock Paper or Scissors?");
console.log(userSelection);

function whoWon() {
    if (userSelection == "rock" && interimChoice == "rock") {
        console.log("It's a draw")
    } else if (userSelection == "rock" && interimChoice == "scissors") {
        console.log("You've won!")
    } else if (userSelection == "rock" && interimChoice == "paper") {
        console.log("You've lost!")
    } else if (userSelection == "paper" && interimChoice == "paper") {
        console.log("It's a draw")
    } else if (userSelection == "paper" && interimChoice == "scissors") {
        console.log("You've lost")
    } else if (userSelection == "paper" && interimChoice == "rock") {
        console.log("You've won")
    } else if (userSelection == "scissors" && interimChoice == "scissors") {
        console.log("It's a draw")
    } else if (userSelection == "scissors" && interimChoice == "rock") {
        console.log("You've lost")
    } else if (userSelection == "scissors" && interimChoice == "paper") {
        console.log("You've won")
    }
}

whoWon();