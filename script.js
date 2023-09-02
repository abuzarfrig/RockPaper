const resultsDiv = document.getElementById('results');
const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

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
    return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateResults(message) {
  resultsDiv.innerHTML += `<p>${message}</p>`;
  resultsDiv.scrollTop = resultsDiv.scrollHeight;
}

function checkWinner() {
  if (playerScore === 5) {
    updateResults('You win the game!');
    disableButtons();
  } else if (computerScore === 5) {
    updateResults('Computer wins the game.');
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice().toLowerCase();
    const roundResult = playRound(playerSelection, computerSelection);

    updateResults(roundResult);

    if (roundResult.startsWith('You Win')) {
      playerScore++;
    } else if (roundResult.startsWith('Computer Wins')) {
      computerScore++;
    }

    checkWinner();
  });
});
