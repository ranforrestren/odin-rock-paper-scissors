function computerPlay() {
  // Generates random number from 1 - 3, and selects move based on number
  let computerMove;
  let numberPick = Math.floor((Math.random() * (3)) + 1)
  switch(numberPick) {
    case 1:
      computerMove = "rock";
      break;
    case 2:
      computerMove = "paper";
      break;
    case 3:
      computerMove = "scissors";
      break;
  }
  return computerMove;
}

function playerPlay() {
  // Prompts player for input and checks if move is valid
  let playerMove
  let selectionValid = 0;
  while (selectionValid == 0) 
  {
    playerMove = prompt("Please Select Your Move.", "");
    playerMove = playerMove.toLowerCase();
    if (playerMove == "rock" || playerMove == "paper" || playerMove == "scissors") 
    {
      selectionValid = 1;
    } else {
      window.alert("Invalid Move!");
    }
  }
  return playerMove;
}

function playRound() 
{
}

console.log(computerPlay());
console.log(playerPlay());