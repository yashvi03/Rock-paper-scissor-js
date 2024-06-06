let options = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = options[Math.floor(Math.random() * options.length)];
  console.log(compChoice);
  return compChoice;
}

function getHumanChoice() {
  let choice = prompt("Enter your choice 1.rock 2.paper 3.scissor");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "rock")
  ) {
    console.log("You lose this round :(");
    computerScore += 1;
    console.log(humanScore);
    console.log(computerScore);
  } else if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissor")
  ) {
    console.log("You win this round!!");
    humanScore += 1;
    console.log(humanScore);
    console.log(computerScore);
  } else {
    console.log("It's a draw!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You hav won the game!!");
  } else if (computerScore > humanScore) {
    console.log("You lost. Better luck next time");
  } else {
    console.log("Thats a draw! you both have equal scores.");
  }
}

playGame();
