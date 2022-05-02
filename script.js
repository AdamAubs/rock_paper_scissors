//Initial score start
let compterScore = 0;
let playerScore = 0
let drawScore = 0

//Have the computer generate a random pick(rock paper or scissors)
function computerPlay(){
     let options = ['rock','paper','scissors']
     return options[Math.floor(Math.random() * options.length)];
 }

 //Determine who wins the round when comapred 
 //Also add point to winner
 function playRound(playerSelection, computerSelection) {
     if(playerSelection === 'rock' && computerSelection === 'paper'){
         compterScore++;
         return computerWinsRound
     }if(playerSelection === 'paper' && computerSelection === 'scissors'){
         compterScore++;
         return computerWinsRound
     }if(playerSelection === 'scissors' && computerSelection === 'rock'){
         compterScore++;
         return computerWinsRound
     }if(playerSelection === 'paper' && computerSelection === 'rock'){
         playerScore++;
         return playerWinsRound;
     }if(playerSelection === 'scissors' && computerSelection === 'paper'){
         playerScore++;
         return playerWinsRound
     }if(playerSelection === 'rock' && computerSelection === 'scissors'){
         playerScore++;
         return playerWinsRound
     }if(playerSelection ===  computerSelection){
         drawScore++;
         return draw
     }

 }
//Variables for who wins the round
 let playerWinsRound = "You Win this Round!"
 let computerWinsRound = "You Lose this Round!"
 let draw = "Its a draw"

 //The number of rounds played with the output included 
 //Determines the winner of the 5 rounds played.
 function game(){
    for(let i = 0; i <5; i++){
        let userChoice = prompt('Rock, Paper, Scissors').toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(userChoice, computerSelection)
        console.log("Round", i + 1)
        console.log("user's choice", userChoice);
        console.log("computer's choice", computerSelection);
        console.log("Result is", result);
        console.log("Computers Score", compterScore);
        console.log("Your score", playerScore);
        console.log("Tie score", drawScore);
        console.log("//////////////")
        console.log("//////////////")
    }
    if(compterScore > playerScore && compterScore > drawScore){
        console.log("Sorry, the computer won")
    }if(playerScore > compterScore && playerScore > drawScore){
        console.log("Congradulations! You won!")
    }if(drawScore === playerScore && drawScore > compterScore){
        console.log("Congradulations! You won!")
    }if(drawScore === compterScore && drawScore > playerScore){
        console.log("Sorry, the computer won );")
    }if(drawScore > playerScore && playerScore > compterScore){
        console.log("Congradulations! You won!")
    }if(drawScore > compterScore && compterScore > playerScore){
        console.log("Sorry, the computer won );")
    }
 }
 //starts the game
 game()