"use strict"
/* Player and Computer start with no points and gain points as they win rounds*/
let playerScore = 0;
let computerScore = 0;

/*The code below randomly selects between "Rock" "Paper" or "Scissors"*/
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1;
  switch(computerChoice){
    case 1:
        return "rock";
        
    case 2:
        return "paper";
        
    case 3:
        return "scissor";
        
  }
}


/*The player chooses between rock, paper, and scissor and competes against the computer in a single round*/
function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock" && computerSelection === "scissor") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")) 
    {
        playerScore++;

        return "You win!";
    }
    else if ((playerSelection === "scissor" && computerSelection === "rock")||
    (playerSelection === "rock" && computerSelection === "paper")||
    (playerSelection === "paper" && computerSelection === "scissor"))
    {

        computerScore++;

        return "You lose!";
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } 
    else{
        return "Please make an appropriate choice";
    }
}


/*Plays five rounds of rock, paper, and scissor*/
function game(){
    for (let i = 0; i < 5; i++){
        
        const playerSelection = prompt("Choose: rock, paper, or scissor?").toLowerCase();
        
        const computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));  
        
        console.log(`The current score is player:${playerScore} computer:${computerScore}`)
        
        
    }        
 }
 
 game();

 
