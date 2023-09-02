function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      
      console.log(roundResult);
  
      if (roundResult.startsWith('You Win')) {
        playerScore++;
      } else if (roundResult.startsWith('You Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Computer wins the game.');
    } else {
      console.log('It\'s a tie game!');
    }
  }
  
  // Start the game when the page loads (you can call game() whenever you want to start the game)
  game();
  