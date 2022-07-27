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
    if((playerSelection === "rock" && computerSelection === "scissor") || 
    (playerSelection === "paper" && computerSelection === "rock" ) ||
    (playerSelection === "rock" && computerSelection === "scissor")){
        return "You win!"
    }
    else if((playerSelection === "scissor" && computerSelection === "rock" )||
    (playerSelection === "rock" && computerSelection === "paper" )||
    (playerSelection === "scissor" && computerSelection === "rock" )){
        return "You lose!"
    }
    else return "It's a tie!"
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));