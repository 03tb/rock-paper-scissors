let interimChoice;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
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
