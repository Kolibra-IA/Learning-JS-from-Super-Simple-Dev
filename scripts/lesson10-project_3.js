const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function updateScoreElement() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(userMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "You tie!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  }

  if (userMove === "paper") {
    if (computerMove === "paper") {
      result = "You tie!";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    } else if (computerMove === "rock") {
      result = "You win!";
    }
  }

  if (userMove === "scissors") {
    if (computerMove === "scissors") {
      result = "You tie!";
    } else if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    }
  }

  if (result === "You win!") {
    score.wins++;
  }
  if (result === "You tie!") {
    score.ties++;
  }
  if (result === "You lose!") {
    score.losses++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerText = result;

  document.querySelector(".js-moves").innerHTML =
    `You <img src="images/${userMove}-emoji.png" class="move-icon" alt="" /> <img src="images/${computerMove}-emoji.png" class="move-icon" alt="" /> Computer`;
  updateScoreElement();

  alert(
    `You picked ${userMove}; computer picked ${computerMove}; ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
          `,
  );
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
