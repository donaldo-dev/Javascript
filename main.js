
 function computerPlay(){
    var computerOptions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
};


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return -1;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1;
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
     } else {
        return 0;
     }
}


function game() {
    var player_counter = 0;
    var computer_counter = 0;
    for(let i = 0; i< 5; i++){
        playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if(playRound(playerSelection, computerSelection) === 0){
            computer_counter++;
        }
        if(playRound(playerSelection, computerSelection) === 1){
            player_counter++;
        }
    }
    if(player_counter > computer_counter){
        return `The winner is the player`;
    }
    else if(player_counter < computer_counter){
        return `The winner is the computer`;
    }
    else if(player_counter === computer_counter){
        return `Tie!`;
    }
}

console.log(game());