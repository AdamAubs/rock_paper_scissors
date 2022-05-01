
function computerPlay(){
     let options = ['rock','paper','scissors']
     return options[Math.floor(Math.random() * options.length)];
 }
 
 
 function userPlay(){
     const input = prompt('Rock, Paper, Scissors');
     const newInput = input.toLowerCase();
     if (newInput === 'rock'){
         return 'rock';
     }else if(newInput === 'paper'){
         return 'paper';
     }else{
         return 'scissors';
     }
 }
 
 function playRound(playerSelection, computerSelection) {
     if(playerSelection === 'rock' && computerSelection === 'paper'){
         return ("You Lose! Paper beats Rock");
     }if(playerSelection === 'paper' && computerSelection === 'scissors'){
         return ("You Lose! Scissors beats Paper");
     }if(playerSelection === 'scissors' && computerSelection === 'rock'){
         return ("You Lose! Rock beats Scissors");
     }if(playerSelection === 'paper' && computerSelection === 'rock'){
         return  ("You Win! Paper beats Rock");
     }if(playerSelection === 'scissors' && computerSelection === 'paper'){
         return ("You Win! Scissors beats Paper");
     }if(playerSelection === 'rock' && computerSelection === 'scissors'){
         return ("You Win! Rock beats Rock");
     }if(playerSelection ===  computerSelection){
         return "Its a draw";
     }
 }

let userChoice = userPlay();
let computerSelection = computerPlay();
let result = playRound(userChoice, computerSelection)
console.log("user's choice", userChoice);
console.log("computer's choice", computerSelection);
console.log("Result is", result);