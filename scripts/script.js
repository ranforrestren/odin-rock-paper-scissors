// attach event listeners to the player's buttons that play a round
const buttons = document.querySelectorAll('.inputButton');
buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});


function computerPlay() {
  // Generates random number from 1 - 3, and selects move based on number
  let computerInput;
  let numberPick = Math.floor((Math.random() * (3)) + 1)
  switch(numberPick) {
    case 1:
      computerInput = "rock";
      break;
    case 2:
      computerInput = "paper";
      break;
    case 3:
      computerInput = "scissors";
      break;
  }
  return computerInput;
}

function checkWinner(computerSelection, playerSelection) 
{
  // Checks player and computer moves and returns winner
  let gameResult;
  // Checks for tie
  if (computerSelection == playerSelection)
  {
    gameResult = "tie";
  }
  // If there is no tie, checks for winner
  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      gameResult = "player";
    } 
    else if (playerSelection == "scissors") {
      gameResult = "computer";
    }
  }
  else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      gameResult = "computer";
    } 
    else if (playerSelection == "scissors") {
      gameResult = "player";
    }
  }
  else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      gameResult = "player";
    } 
    else if (playerSelection == "paper") {
      gameResult = "computer";
    }
  }
  // Returns winner
  return gameResult;
}

function playRound(e) {
  // Plays a round of Rock Paper Scissors
  let playerMove = e.target.dataset.selection;
  let computerMove = computerPlay();
  let result = checkWinner(computerMove, playerMove);
  // Alerts player to result of round
  if (result == "player") {
    window.alert(`You win! ${playerMove} beats ${computerMove}!`);
  } else if (result == "computer") {
    window.alert(`You lose! ${computerMove} beats ${playerMove}!`);
  } else if (result == "tie") {
    window.alert(`Tie! you both selected ${playerMove}!`);
  }
  console.log(computerMove);
  console.log(playerMove);
  console.log(result);
  scoreBoard(result);
  return;
}

function scoreBoard(result) {
  // Collects current scoreboard from DOM and evaluates new score
  let playerScore = parseInt(document.querySelector('#playerScore').innerText);
  let computerScore = parseInt(document.querySelector('#computerScore').innerText);
  // Updates scoreboard
  if (result == "player") {
      playerScore++;
      document.querySelector('#playerScore').innerText = playerScore;
    } else if (result == "computer") {
      computerScore++;
      document.querySelector('#computerScore').innerText = computerScore;
    }
  console.log(playerScore);
  console.log(computerScore);
  // Evaluates if there is a winner
  if (playerScore == 3) {
    announceWinner("player");
  } else if (computerScore == 3) {
    announceWinner("computer");
  }
  return;
} 

function announceWinner(winner) {
  // creates HTML elements to announce the winner
  const container = document.querySelector('#resultsBox');
  const winnerAnnouncement = document.createElement('h1');
  const resetButton = document.createElement('button');
  winnerAnnouncement.classList.add("announce");
  resetButton.classList.add("announce");
  // styles winner announcement depending on winner
  if (winner == "player") {
    winnerAnnouncement.innerText = "The Player Has Won!";
    winnerAnnouncement.setAttribute('style', 'color: green');
  } else if (winner == "computer") {
    winnerAnnouncement.innerText = "The Computer Has Won!";
    winnerAnnouncement.setAttribute('style', 'color: red');
  }
  // adds HTML elements to page
  resetButton.innerText = "Play again?"
  container.appendChild(winnerAnnouncement);
  container.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  return;
}

function resetGame() {
  // resets state of the game
  document.querySelector('#playerScore').innerText = 0;
  document.querySelector('#computerScore').innerText = 0;
  // removes winner announcement nodes
  document.querySelectorAll('.announce').forEach((element) => {
    element.remove();
  });
}