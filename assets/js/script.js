/**
 * create const variables to play the game
 */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    
/**
 * Function to play the game
 */
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('paper');
const scissorsButton = document.querySelector('scissors');
const playerOptions = [rockButton, paperButton, scissorsButton];
const computerOptions = ['rock', 'paper', 'scissors'];

/**
 * Function to start play
 */
playerOptions.forEach(option => {
    option.addEventListener('click', function() {

        const movesLeft = document.querySelector('.movesLeft'); moves++;
        movesLeft.innerText = `Moves Left: ${10-moves}`;

        const choiseNumber = Math.floor(Math.random()*3);
        const computerChoise = computerOptions[choiseNumber];

 /**
 * Function to see who wins
 */
        winner(this.innerText, computerChoice);

        if(moves === 10) {
            gameOver(playerOptions, movesLeft);
        }
    })
});
};  