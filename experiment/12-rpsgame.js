let userMove;
let computerMove;
let currentResult;
let autoPlayInterval;
let scores;
if (!localStorage.getItem("scores")) {
  scores = { win: 0, loss: 0, tie: 0 };
} else {
  scores = JSON.parse(localStorage.getItem("scores"));
}

document.getElementById("win-count").textContent = scores.win;
document.getElementById("loss-count").textContent = scores.loss;
document.getElementById("tie-count").textContent = scores.tie;

function randomMove(randomMoveA) {
  let randomPick = Math.random();

  if (randomPick >= 0 && randomPick <= 1 / 3) {
    randomMoveA = "rock";
  } else if (randomPick > 1 / 3 && randomPick <= 2 / 3) {
    randomMoveA = "scissors";
  } else if (randomPick > 2 / 3 && randomPick < 1) {
    randomMoveA = "paper";
  }

  return randomMoveA;
}

document.querySelector(".rock-pick").addEventListener("click", function () {
  playGame("rock");
});

document.querySelector(".paper-pick").addEventListener("click", function () {
  playGame("paper");
});

document.querySelector(".scissors-pick").addEventListener("click", function () {
  playGame("scissors");
});

function playGame(userMovef) {
  userMove = userMovef.toLowerCase();
  computerMove = randomMove();

  document.querySelector(".computer-move").innerHTML =
    `Computer picked <img src="../images/${computerMove}-emoji.png" alt="${computerMove}" class="img-user" />.`;

  document.querySelector(".comparison").innerHTML =
    `You picked <img src="../images/${userMove}-emoji.png" alt="${userMove}" class="img-user" /> and computer picked <img src="../images/${computerMove}-emoji.png" alt="${computerMove}" class="img-user" />.`;

  if (userMove === "rock") {
    if (computerMove === userMove) {
      currentResult = "tie";
      document.querySelector(".result").innerHTML = "It's a tie!";
    } else if (computerMove === "scissors") {
      currentResult = "win";
      document.querySelector(".result").innerHTML = "You win!";
    } else if (computerMove === "paper") {
      currentResult = "lose";
      document.querySelector(".result").innerHTML = "Computer wins!";
    }
  } else if (userMove === "scissors") {
    if (computerMove === userMove) {
      currentResult = "tie";
      document.querySelector(".result").innerHTML = "It's a tie!";
    } else if (computerMove === "paper") {
      currentResult = "win";
      document.querySelector(".result").innerHTML = "You win!";
    } else if (computerMove === "rock") {
      currentResult = "lose";
      document.querySelector(".result").innerHTML = "Computer wins!";
    }
  } else if (userMove === "paper") {
    if (computerMove === userMove) {
      currentResult = "tie";
      document.querySelector(".result").innerHTML = "It's a tie!";
    } else if (computerMove === "rock") {
      currentResult = "win";
      document.querySelector(".result").innerHTML = "You win!";
    } else if (computerMove === "scissors") {
      currentResult = "lose";
      document.querySelector(".result").innerHTML = "Computer wins!";
    }
  }

  if (currentResult === "win") {
    document.getElementById("win-count").textContent =
      parseInt(document.getElementById("win-count").textContent) + 1;
    scores.win++;
  } else if (currentResult === "lose") {
    document.getElementById("loss-count").textContent =
      parseInt(document.getElementById("loss-count").textContent) + 1;
    scores.loss++;
  } else {
    document.getElementById("tie-count").textContent =
      parseInt(document.getElementById("tie-count").textContent) + 1;
    scores.tie++;
  }

  localStorage.setItem("scores", JSON.stringify(scores));
}
document.querySelector(".reset-button").addEventListener("click", function () {
  document.getElementById("win-count").textContent = "0";
  document.getElementById("loss-count").textContent = "0";
  document.getElementById("tie-count").textContent = "0";
  localStorage.removeItem("scores");
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});

document
  .querySelector(".auto-play-button")
  .addEventListener("click", function () {
    if (this.textContent === "Auto-play") {
      this.textContent = "Stop Auto-play";
      autoPlayInterval = setInterval(function () {
        playGame(randomMove());
      }, 1000);
    } else {
      this.textContent = "Auto-play";
      clearInterval(autoPlayInterval);
    }
  });
