
let playerScore = 0;

let computerScore = 0;

function scoreTracker(){
    switch (result.textContent){
        case "Tie":
            break;
        case "You win!":
            playerScore += 1;
            break;
        case "You lose":
            computerScore += 1;
            break;
    } 
} 

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1; 
    var choice = ""
    if (choiceNumber === 3){
        choice = "Rock"         
    }else if (choiceNumber === 2) {
        choice = "Paper"
    }else {
        choice = "Scissors"
    }
    return choice;
}

function winner(){
    if (playerScore == 5){
        alert('The winner is the player!')
    }else if (computerScore == 5){
        alert('The age of man is over!')
    }else {
        return;
    }
    }

function startGame(playerSelection, computerSelection) {
    console.log(playerSelection);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    result.textContent = selectionComparison(playerSelection, computerSelection);
    console.log(result);
    scoreTracker();
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    console.log(playerScore);
    console.log(computerScore);
    winner();
}

function selectionComparison(playerSelection, computerSelection){
    switch (computerSelection){
        case "Rock":
            if (playerSelection === "rock"){
                return("Tie");
            }else if (playerSelection === "paper"){
                return("You win!");
            }else if (playerSelection === "scissors"){
                return("You lose");
            }
            break;
            
        case "Paper":
        if (playerSelection === "paper"){
                return("Tie");
            }else if (playerSelection === "scissors"){
                return("You win!");
            }else if (playerSelection === "rock"){
                return("You lose");
            }
            break;

        case "Scissors":
        if (playerSelection === "scissors"){
                return("Tie");
            }else if (playerSelection === "rock"){
                return("You win!");
            }else if (playerSelection === "paper"){
                return("You lose");
            }
            break;
        }
}


const choices = document.querySelectorAll('#choice');

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        startGame(e.target.className);
    });
});



const result = document.querySelector('.result');

const score = document.querySelector('.score');

score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;