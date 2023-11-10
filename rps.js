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

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
});

btnPaper.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
});

btnScissors.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
});