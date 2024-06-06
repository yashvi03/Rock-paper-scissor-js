let options = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  console.log(options[Math.floor(Math.random() * options.length)]);
  return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice 1.rock 2.paper 3.scissor");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log("You lose this round :(");
    computerScore += 1;
    console.log(humanScore);
    console.log(computerScore);
  } else {
    console.log("You win this round!!");
    humanScore += 1;
    console.log(humanScore);
    console.log(computerScore);
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
    console.log("Thats a draw! ou both have equal scores.");
  }
}

playGame();
