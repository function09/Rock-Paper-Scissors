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
    if(playerSelection == "rock" && computerSelection == "paper"){
        return alert("You lose! Paper beats rock.")
    }
    else if(playerSelection == "rock" && computerSelection == "scissor"){
        return alert("You win! Rock beats scissor.")
    }
    else if(playerSelection == "paper" && computerSelection == "scissor"){
        return alert("You lose! Scissor beats paper.")
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return alert("You win! Paper beats rock.")
    }
   else if(playerSelection == "scissor" && computerSelection == "paper"){
        return alert("You win! Scissor beats paper.")
    }
    else if(playerSelection == "scissor" && computerSelection == "rock"){
        return alert("You lose! Rock beats scissor.")
    }
    else {return alert("It's a tie! No points gained.")}
}
