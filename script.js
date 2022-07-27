"use strict"
/*The code below randomly selects between "Rock" "Paper" or "Scissors"*/
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1;
  switch(computerChoice){
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissor";
        break;
  }
}

/*The player chooses between rock, paper, and scissor and competes against the computer in a single round*/
function playRound(playerSelection, computerSelection){
    if((playerSelection === "rock".toLowerCase() && computerSelection === "scissor".toLowerCase()) || 
    (playerSelection === "paper".toLowerCase() && computerSelection === "rock".toLowerCase()) ||
    (playerSelection === "rock".toLowerCase() && computerSelection === "scissor".toLowerCase())){
        return "You win!"
    }
    else if((playerSelection === "scissor".toLowerCase() && computerSelection === "rock".toLowerCase())||
    (playerSelection === "rock".toLowerCase() && computerSelection === "paper".toLowerCase())||
    (playerSelection === "scissor".toLowerCase() && computerSelection === "rock".toLowerCase())){
        return "You lose!"
    }
    else {
        return "It's a tie!"
} 
}

let playerScore = 0;

let computerScore = 0;

/*Plays five rounds of rock, paper, and scissor*/
function game(){
    for (let i=0; i <5; i++){
        
        const playerSelection = prompt("Choose: rock, paper, or scissor?");
        
        const computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));  
    }        
 }
 
 game();

