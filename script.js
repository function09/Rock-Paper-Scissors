"use strict"
//Player and Computer start with no points and gain points as they win rounds
let playerScore = 0;
let computerScore = 0;

//The code below randomly selects between "Rock" "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1;
  switch(computerChoice){
    case 1:
        return "Rock";
        
    case 2:
        return "Paper";
        
    case 3:
        return "Scissor";
        
  };
};

//The player chooses between rock, paper, and scissor and competes against the computer in a single round
function playRound(playerSelection, computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Scissor") || 
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissor" && computerSelection === "Paper")) 
    {
        playerScore++;

        return document.getElementById("results").textContent = `The player wins this round! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
        
    }
    else if ((playerSelection === "Scissor" && computerSelection === "Rock")||
    (playerSelection === "Rock" && computerSelection === "Paper")||
    (playerSelection === "Paper" && computerSelection === "Scissor"))
    {
        computerScore++;

        return document.getElementById('results').textContent = `The computer wins this round! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    }
    else if (playerSelection === computerSelection) {
        return document.getElementById('results').textContent = `It is a tie! The player chose ${computerSelection.toLowerCase()} and the computer chose ${playerSelection.toLowerCase()}.`;

    };
};

let container = document.querySelector('#container');

container.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id){
        case 'rck':
            playRound("Rock", getComputerChoice());
            document.getElementById("playerScore").textContent = `Player Score: ${playerScore}`
            document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`
            endGame();
            break;

        case 'ppr':
            playRound("Paper", getComputerChoice());
            document.getElementById("playerScore").textContent = `Player Score: ${playerScore}`
            document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`
            endGame();
            break;

        case 'scisr':
            playRound("Scissor", getComputerChoice());
            document.getElementById("playerScore").textContent = `Player Score: ${playerScore}`
            document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`
            endGame();
            break;
    };

});

function restart(){
    //Creates a restart button. 
    const restart = document.querySelector('#score');

    const content = document.createElement('button');
    content.classList.add('restart');
    content.textContent = 'Play again?';

    restart.appendChild(content); 
    
    //Upon clicking "Play again?" Player Score and Computer Score are set to 0 and the buttons are enabled.
    const newGame = document.querySelector('.restart');

    newGame.addEventListener('click', (e) =>{
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").textContent = `Player Score: ${playerScore}`;
    document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
    
    restart.lastChild.remove();

    rck.disabled=false;
    ppr.disabled=false;
    scisr.disabled=false;

    });
    
};

//If either the player or computer reach 5 points, the game ends and all button selections are disabled.
function endGame(){
    if (playerScore === 5){
        
        document.getElementById('results').textContent = 'The player chose rock and the computer chose scissor.The player wins the game!';
        
        rck.disabled=true;
        ppr.disabled=true;
        scisr.disabled=true;

        restart(); 
    }
    else if (computerScore === 5){
        
        document.getElementById('results').textContent = 'The player chose rock and the computer chose paper. The computer wins the game!';
        
        rck.disabled=true;
        ppr.disabled=true;
        scisr.disabled=true;

        restart(); 
}};





