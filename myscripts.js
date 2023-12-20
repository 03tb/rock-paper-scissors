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


let userSelection;
let playerSelection;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreTracker = document.querySelector('#player-score');
const computerScoreTracker = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#start-player-score');
const computerScoreDisplay = document.querySelector('#start-computer-score');

rockButton.addEventListener('click', () => {
    userSelection = 'rock'
    playerSelection = userSelection;
    getComputerChoice();
    whoWon();   
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerScoreTracker.appendChild(playerScoreDisplay);
    computerScoreTracker.appendChild(computerScoreDisplay);
});



paperButton.addEventListener('click', () => {
    userSelection = 'paper'
    playerSelection = userSelection;
    getComputerChoice();
    whoWon(); 
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerScoreTracker.appendChild(playerScoreDisplay);
    computerScoreTracker.appendChild(computerScoreDisplay);
});



scissorsButton.addEventListener('click', () => {
    userSelection = 'scissors'
    playerSelection = userSelection;
    getComputerChoice();
    whoWon();
    checkScore();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerScoreTracker.appendChild(playerScoreDisplay);
    computerScoreTracker.appendChild(computerScoreDisplay);
});
   

let replay = false;
let computerScore = 0;
let playerScore = 0;
const statusMessage = document.querySelector('#round-status');


function whoWon() {
    if (playerSelection == "rock" && computerSelection == "rock") {
        statusMessage.textContent = 'The round was a draw';
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        statusMessage.textContent = 'You won the round ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore = computerScore + 1;
        statusMessage.textContent = 'You lost the round ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        statusMessage.textContent = 'The round was a draw';
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1;
        statusMessage.textContent = 'You lost the round ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1;
        statusMessage.textContent = 'You won the round ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        statusMessage.textContent = 'The round was a draw';
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1;
        statusMessage.textContent = 'You lost the round ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1;
        statusMessage.textContent = 'You won the round ' + playerSelection + ' beats ' + computerSelection;
    }
}


function checkScore() {
    if (playerScore > computerScore) {
        if (playerScore == 5) {
            statusMessage.textContent = 'Congratulations, you won!';
            return
        }
    } else {
        if (computerScore == 5) {
            statusMessage.textContent = 'Game Over! Computer wins!';
            return
        } 
    } 
} 


const restartButton = document.querySelector('#restart-button')

restartButton.addEventListener ('click', () => {
    statusMessage.textContent = 'Game reset, choose a move to play';
    resetGame();
})


function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerScoreTracker.appendChild(playerScoreDisplay);
    computerScoreTracker.appendChild(computerScoreDisplay);
}


// ideas for future improvement
// consider adding confirmation button on restart game
// something like insert new div with two buttons with a message "are you sure you want to restart?"
// adding another if statement where if the result was a consecutive draw, the message says "that was another draw"