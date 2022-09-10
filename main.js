
 function computerPlay(){
    var computerOptions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
};


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return -1;   // -1 for draw
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1;    // 1 is when playerSelection wins
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;    // 1 is when player wins
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;    // 1 is when player wins
     } else {
        return 0;   // 0 for lose
     }
}


function game() {
    
    var player_counter = 0;
    var computer_counter = 0;
    
    let rock = document.querySelector(".rock");
    let scissors = document.querySelector(".scissor");
    let paper = document.querySelector(".paper");
    const playerOptions = [rock, paper, scissors];

        playerOptions.forEach(option =>{
            option.addEventListener('click', function(){
                
                let computerSelection = computerPlay();
                const playersChoose = document.querySelector('.playersChoose');
                const computersChoose = document.querySelector('.computersChoose');
                playersChoose.innerText = `You have chosen ${this.innerText}`;
                computersChoose.innerText = `Computer has chosen ${computerSelection}`;
                

                playRound(this.innerText, computerSelection);

                const result = document.querySelector('.result');
                const playerScoreBoard = document.querySelector('.p-count');
                const computerScoreBoard = document.querySelector('.c-count');

                if(playRound(this.innerText, computerSelection) === 0){
                    computer_counter++;
                    result.textContent = 'Computer Won';
                    computerScoreBoard.textContent = computer_counter;
                }
                if(playRound(this.innerText, computerSelection) === 1){
                    player_counter++;
                    result.textContent = 'Player Won'
                    playerScoreBoard.textContent = player_counter;
                }
                if(playRound(this.innerText, computerSelection) === -1){
                    result.textContent = 'Tie';
                }

            if(computer_counter == 5 || player_counter == 5){
                const move = document.querySelector('.move');
                const backgroundColor = document.querySelector('.game');
                playerOptions.forEach(option => {
                    option.style.display = 'none';
                })
                move.innerText = 'Game Over!!';

                if(player_counter > computer_counter) {
                    result.style.fontSize = '2rem';
                    result.innerText = 'You Won The Game';
                    backgroundColor.style.background = "green";
                }
                else if (player_counter < computer_counter){
                    result.style.fontSize = '2rem';
                    result.innerText = 'You Lost The Game';
                    backgroundColor.style.background = 'red';
                }
                else{
                    result.style.fontsize = '2rem';
                    result.innerText = 'Tie';
                    backgroundColor.style.background = 'gray'
                }
            }   
        })
    })
}



game();