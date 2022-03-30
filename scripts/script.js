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
  return result;
}

/*
function game() {
  // Plays a BO5 of Rock Paper Scissors
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;
  // Plays until score of 3
  while (playerScore < 3 && computerScore < 3) {
    roundResult = playRound();
    if (roundResult == "player") {
      playerScore++;
    } else if (roundResult == "computer") {
      computerScore++;
    }
    console.log(playerScore);
    console.log(computerScore);
  }
  // Evaluates winner of the match
  if (playerScore == 3) {
    window.alert("The player has won the match!");
  } else if (computerScore == 3) {
    window.alert("The computer has won the match!");
  }
} 
*/