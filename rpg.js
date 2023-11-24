// selected all elements and assigning them to a variable each
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const ties = document.querySelector(".ties");
const finalResult = document.querySelector(".final-score");

// declared global variables
let choice;
let userCount = 0;
let computerCount = 0;
let draw = 0;

// defined the computer selection using the Math.random and math.floor
function getComputerChoice() {
  const list = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}
// button event and game play
let i = 0;
while (true) {
  buttons.forEach(function (button) {
    button.addEventListener("click", (e) => {
      choice = e.target.textContent.toLowerCase();
      game();
    });
  });
  if ((userCount || computerCount) === 5) {
    break;
  }
}

// defined a function for one round of game play; returns 1 if player wins,
// returns 0 if computer wins, and return nothing when it's a tie.
function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = choice;
  alert(`You choose ${playerSelection}, computer choose ${computerSelection}`);
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return 1;
  } else if (
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
  } else {
    return 0;
  }
}
// this function calls the playRound function and displays the result
function game() {
  let result = playRound();
  if (result === 1) {
    userCount += 1;
    playerScore.textContent = `You scored: ${userCount}`;
  } else if (result === 0) {
    computerCount += 1;
    computerScore.textContent = `The computers scored: ${computerCount}`;
  } else {
    draw += 1;
    ties.textContent = `Ties: ${draw}`;
  }
}
