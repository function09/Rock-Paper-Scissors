"use strict"
/*The code below randomly selects between "Rock" "Paper" or "Scissors"*/
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1;
  switch(computerChoice){
    case 1:
        return "Rock";
        break;
    case 2:
        return "Paper";
        break;
    case 3:
        return "Scissor";
        break;
  }
}
