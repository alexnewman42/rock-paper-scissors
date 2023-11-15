const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
let playerScore = 0;
let computerScore = 0; 

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getComputerChoice() {
    let num = randomInteger(1,3);
    switch (num) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            console.log("Error");
    }
}

function playRound(playerSelection, computerSelection) {    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win! Scissors beats rock!";
    } else {
        return "Something Went Wrong";
    }
}

// Event delegation to catch the button click

let buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;
    let status = document.getElementById('status');
    let score = document.getElementById('score');

    status.textContent = playRound(target.id, getComputerChoice());
    score.textContent = "Player: " + playerScore + "   Computer: " + computerScore;
    
    if (playerScore == 5) {
        winner.textContent = "The human wins!";
    } else if (computerScore == 5) {
        winner.textContent = "The computer wins!"
    }
});


