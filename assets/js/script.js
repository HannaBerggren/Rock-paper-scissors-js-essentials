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
const playGame = () => {
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const playerOptions = [rockButton, paperButton, scissorButton];
const computerOptions = ['rock', 'paper', 'scissor'];

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
 * Function to see who wins and to end game after 10 moves
 */
        winner(this.innerText, computerChoise);

        if(moves === 10) {
            gameOver(playerOptions, movesLeft);
        }
    });
});
};  
/**
 * Function to decide who the winner is
 */

    const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.player-count');
    const computerScoreBoard = document.querySelector('.computer-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      
      if (player === computer) {
        result.textContent = 'Tie';
        } else if (player == 'rock') {
          if (computer == 'paper'){
            result.textContent = 'Computer Won!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'scissor') {
          if (computer == 'rock'){
              result.textContent = 'Computer Win!';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'paper'){
          if (computer == 'scissor'){
              result.textContent = 'Computer Win!';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Win!';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  };
/**
 * Function to run when game is over
 */
    const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadButton = document.querySelector('.restart');
     
      playerOptions.forEach(option => {
      option.style.display = 'none';
      });

      chooseMove.innerText = 'Game over!';
      movesLeft.style.display = 'none';

      if (playerScore > computerScore) {
        result.style.fontSize = '3rem';
        result.innerText = 'Yeey! You won!';
        result.style.color = '#f4f7f8';
      } else if (playerScore < computerScore) {
        result.style.fontSize = '3rem';
        result.innerText = 'You lost the game!';
        result.style.color = '#f4f7f8';
      } else {
        result.style.fontSize = '3rem';
        result.innerText = 'Tie';
        result.style.color = '#f4f7f8';
      }
        reloadButton.innerText = 'Restart';
        reloadButton.style.display = 'flex';
        reloadButton.addEventListener('click', () => {
        window.location.reload();
      });
  };

    /**
     * Calling playGame function 
     */ 
        playGame();

    };

    /**
     * Calling game function
     */ 
        game();
  



