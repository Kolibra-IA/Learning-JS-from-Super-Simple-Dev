let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};
let intervalID;
const autoplay = document.querySelector(".autoplay");

document.querySelector(".score").textContent =
  `Score = Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;

document.querySelector(".rock").addEventListener("click", function () {
  playGame("rock");
});
document.querySelector(".paper").addEventListener("click", function () {
  playGame("paper");
});
document.querySelector(".scissors").addEventListener("click", function () {
  playGame("scissors");
});
document.querySelector(".reset").addEventListener("click", function () {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;

  localStorage.removeItem("score");
  document.querySelector(".score").textContent =
    `Score = Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;
  document.querySelector(".result").textContent = ``;
});
document.querySelector(".autoplay").addEventListener("click", function () {
  if (!intervalID) {
    autoplay.textContent = "Stop";
    intervalID = setInterval(function () {
      playGame(computerMove());
    }, 1000);
  } else {
    autoplay.textContent = "Auto-play";
    clearInterval(intervalID);
    intervalID = "";
  }
});

function computerMove() {
  const randomNumber = Math.random();
  let computerPick;

  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerPick = "rock";
  }
  if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerPick = "paper";
  }
  if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerPick = "scissors";
  }
  return computerPick;
}

function playGame(user) {
  const userPick = user;
  let computerPick = computerMove();

  console.log(computerPick);
  const result = document.querySelector(".result");

  if (userPick === "rock") {
    if (computerPick === "scissors") {
      result.innerHTML = `You won! You picked <img src='../images/rock-emoji.png'>; computer picked <img src='../images/scissors-emoji.png'> `;
      score.win++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "paper") {
      result.innerHTML = `You lose! You picked <img src='../images/rock-emoji.png'>; computer picked <img src='../images/paper-emoji.png'> `;
      score.loss++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "rock") {
      result.innerHTML = `You tie! You picked <img src='../images/rock-emoji.png'>; computer picked <img src='../images/rock-emoji.png'> `;
      score.tie++;
      localStorage.setItem("score", JSON.stringify(score));
    }
  }
  if (userPick === "paper") {
    if (computerPick === "rock") {
      result.innerHTML = `You won! You picked <img src='../images/paper-emoji.png'>; computer picked <img src='../images/rock-emoji.png'> `;
      score.win++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "scissors") {
      result.innerHTML = `You lose! You picked <img src='../images/paper-emoji.png'>; computer picked <img src='../images/scissors-emoji.png'> `;
      score.loss++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "paper") {
      result.innerHTML = `You tie! You picked <img src='../images/paper-emoji.png'>; computer picked <img src='../images/paper-emoji.png'> `;
      score.tie++;
      localStorage.setItem("score", JSON.stringify(score));
    }
  }
  if (userPick === "scissors") {
    if (computerPick === "paper") {
      result.innerHTML = `You won! You picked <img src='../images/scissors-emoji.png'>; computer picked <img src='../images/paper-emoji.png'> `;
      score.win++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "rock") {
      result.innerHTML = `You lose! You picked <img src='../images/scissors-emoji.png'>; computer picked <img src='../images/rock-emoji.png'> `;
      score.loss++;
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (computerPick === "scissors") {
      result.innerHTML = `You tie! You picked <img src='../images/scissors-emoji.png'>; computer picked <img src='../images/scissors-emoji.png'> `;
      score.tie++;
      localStorage.setItem("score", JSON.stringify(score));
    }
  }

  document.querySelector(".score").textContent =
    `Score = Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;
}
