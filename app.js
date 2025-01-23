let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("comp-score");

const genComptureChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//draw
const draw = () => {
  msg.innerText = `It's a draw! Play again`;

  msg.style.backgroundColor = "grey";
};

//show Winner
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// game Logic
const playGame = (userChoice) => {
  const computerChoice = genComptureChoice();

  if (userChoice === computerChoice) {
    draw();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // paper, scissors
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = computerChoice === "rock" ? false : true;
    } else {
      // rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
