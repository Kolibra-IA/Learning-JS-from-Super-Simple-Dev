let userMove;
let computerMove;

document.querySelector(".rock-pick").addEventListener("click", function () {
  userMove = "rock";
  let randomPick = Math.random();

  if (randomPick >= 0 && randomPick <= 1 / 3) {
    computerMove = "rock";
  } else if (randomPick > 1 / 3 && randomPick <= 2 / 3) {
    computerMove = "scissors";
  } else if (randomPick > 2 / 3 && randomPick < 1) {
    computerMove = "paper";
  }

  document.querySelector(".computer-move").innerHTML =
    `Computer picked <img src="../images/${computerMove}-emoji.png" alt="${computerMove}" class="img-user" />.`;

  document.querySelector(".comparison").innerHTML =
    `You picked <img src="../images/${userMove}-emoji.png" alt="${userMove}" class="img-user" /> and computer picked <img src="../images/${computerMove}-emoji.png" alt="${computerMove}" class="img-user" />.`;

  if (computerMove === userMove) {
    document.querySelector(".result").innerHTML = "It's a tie!";
  } else if (computerMove === "scissors") {
    document.querySelector(".result").innerHTML = "You win!";
  } else if (computerMove === "paper") {
    document.querySelector(".result").innerHTML = "Computer wins!";
  }
});
