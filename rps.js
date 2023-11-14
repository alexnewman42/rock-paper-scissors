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
        return "You lose! Paper beats rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats rock!";
    } else {
        return "Something Went Wrong";
    }
}

const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
let playerScore = 0;
let computerScore = 0; 

// Event delegation to catch the button click

let buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    console.log(playRound(target.id, getComputerChoice()));

});