function computerPlay() {
  let numberPick = Math.floor((Math.random() * (3)) + 1);
  let movePlayed
  switch(numberPick) {
    case 1:
      movePlayed = "Rock";
      break;
    case 2:
      movePlayed = "Paper";
      break;
    case 3:
      movePlayed = "Scissors";
      break;
  }
  return movePlayed;
}

console.log(computerPlay());