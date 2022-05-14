const choices = document.querySelectorAll('.choices')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const score = document.getElementById('score')
const modal = document.querySelector('.modal')

const scoreboard = {
    player: 0,
    computer: 0
}

//Play Game
function play(e){
    restart.style.display ="inline-block"
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice,computerChoice)
    getScore(winner, computerChoice)

}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play))

//Get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34){
        return 'rock';
    }else if(rand <= 0.67){
        return 'paper'
    }else{
        return 'scissors';
    }
}

//Get Winner
function getWinner(p,c){
    if(p === c){
        return 'draw'
    }else if(p === 'rock'){
     if(c === 'paper'){
        return 'computer';
    }else{
        return 'player';
    }

    }else if(p === 'paper'){
     if(c === 'scissors'){
        return 'computer';
     }else{
        return 'player';
     }
     
    }else if(p === 'scissors'){
     if(c === 'rock'){
       return 'computer';
     }else{
       return 'player';
    }
    }

}

function getScore(winner, computerChoice){
    if(winner === 'player'){
        //Inc player score
        scoreboard.player++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-win">You Win</h1>
        <p> Computer Chose <strong>${computerChoice}</strong></p>
        `;
    }else if(winner === 'computer'){
        //Inc computer score
        scoreboard.computer++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-lose">You Lose</h1>
        <p> Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else{
        result.innerHTML =`
        <h1 class="text-draw">It's a draw!</h1>
        <p> Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    //Show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;

    
    modal.style.display = 'block';
    }
    
  

//Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

//Clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal)