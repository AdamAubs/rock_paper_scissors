
function computerSelection(){
    let options = ['rock','paper','scissors']
    return options[Math.floor(Math.random() * options.length)];
}

function playerSelection(){
    let input = prompt('Rock, Paper, Scissors');
    let newInput = input.toLowerCase();
    if (newInput === 'rock'){
        return console.log('rock');
    }else if(newInput === 'paper'){
        return console.log('paper');
    }else{
        return console.log('scissors')
    }
}

playerSelection()