
//creates a random computer play for Rock Paper Scissors
function computerPlay() {
  let randomCalc = Math.random();
  if (randomCalc <= 0.33) return "Rock";
  else if (randomCalc >= 0.66) return "Paper";
  else return "Scissors";
}

//instantiates a random computer play
let computerSelection = computerPlay();

//plays a round with a player input and a computer input
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  let inputInsensitive = playerSelection.toLowerCase();
  let caseSensitive =
    "" +
    inputInsensitive.charAt(0).toUpperCase() +
    inputInsensitive.substring(1);
  // console.log(caseSensitive);

  if (
    caseSensitive != "Rock" &&
    caseSensitive != "Paper" &&
    caseSensitive != "Scissors"
  ) {
    return "Your selection is invalid.";
  }

  if (caseSensitive == "Rock") {
    if (computerSelection == "Rock") return "Draw";
    else if (computerSelection == "Scissors")
      return "You Win! Rock Beats Scissors";
    else return "You Lose! Paper Beats Rock";
  } else if (caseSensitive == "Paper") {
    if (computerSelection == "Paper") return "Draw";
    else if (computerSelection == "Rock") return "You Win! Paper beats Rock!";
    else return "You Lose! Scissors Beats Paper.";
  } else if (caseSensitive == "Scissors") {
    if (computerSelection == "Scissors") return "Draw";
    else if (computerSelection == "Paper")
      return "You Win! Scissors beats Paper!";
    else return "You Lose! Rock beats Scissors.";
  }
}

//instantiates a game of five rock paper scissors hands dealt
function game() {
  let i = 0;
  let userScore = 0;
  let computerScore = 0;
  //   return userScore;

  for (i = 0; i < 5; i++) {
    let newChoice = prompt("Please enter Rock, Paper, or Scissors.");
    let computerNew = new computerPlay();
    // console.log(newChoice);

    if (
      playRound(newChoice, computerNew) == "You Win! Rock Beats Scissors" ||
      playRound(newChoice, computerNew) == "You Win! Paper beats Rock!" ||
      playRound(newChoice, computerNew) == "You Win! Scissors beats Paper!"
    ) {
      userScore++;
      console.log("You Won This Round!");
    } else if (
      playRound(newChoice, computerNew) == "You Lose! Paper Beats Rock" ||
      playRound(newChoice, computerNew) == "You Lose! Scissors Beats Paper." ||
      playRound(newChoice, computerNew) == "You Lose! Rock beats Scissors."
    ) {
      computerScore++;
      console.log("You Lost This Round!");
    } else if (
      playRound(newChoice, computerNew) == "Your selection is invalid."
    ) {
      i--;
      console.log("Please make a valid choice");
    } else console.log("Draw");
  }
  if (userScore > computerScore)
    return "You Won the Game!: " + userScore + " to " + computerScore;
  else if (computerScore > userScore)
    return "You Lost the Game!: " + computerScore + " to " + userScore;
  else return "Draw!: " + userScore + " to " + computerScore;
}