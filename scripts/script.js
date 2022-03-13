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

function playerPlay() {
  // Prompts player for input and checks if move is valid
  let playerInput
  let selectionValid = 0;
  while (selectionValid == 0) 
  {
    playerInput = prompt("Please Select Your Move.", "");
    playerInput = playerInput.toLowerCase();
    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") 
    {
      selectionValid = 1;
    } else {
      window.alert("Invalid Move!");
    }
  }
  return playerInput;
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

function playRound() {
  // Plays a round of Rock Paper Scissors
  let playerMove = playerPlay();
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

playRound();