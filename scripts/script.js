function computerPlay() {
  // Generates random number from 1 - 3, and selects move based on number
  let numberPick = Math.floor((Math.random() * (3)) + 1);
  let computerMove;
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

function playerInput () {
  // Prompts player for input and checks if move is valid
  let playerMove = prompt("Please Select Your Move.", "");
  playerMove = playerMove.toLowerCase();
  if (playerMove != "rock" && playerMove != "paper" && playerMove != "scissors") 
  {
    console.log("Invalid Move!");
  }
  return playerMove;
}

console.log(computerPlay());
console.log(playerInput());