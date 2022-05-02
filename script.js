let compterScore = 0;
let playerScore = 0
let drawScore = 0
function computerPlay(){
     let options = ['rock','paper','scissors']
     return options[Math.floor(Math.random() * options.length)];
 }

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

 let playerWinsRound = "You Win this Round!"
 let computerWinsRound = "You Lose this Round!"
 let draw = "Its a draw"

 function game(){
    for(let i = 0; i <5; i++){
        let userChoice = prompt('Rock, Paper, Scissors').toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(userChoice, computerSelection)
        console.log("user's choice", userChoice);
        console.log("computer's choice", computerSelection);
        console.log("Result is", result);
        console.log(compterScore, playerScore, drawScore)
        console.log("//////////////")
    }
 }
 game()