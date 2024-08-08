function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function rollDice() {
  document.querySelector("button").classList.add("pressedStart");
  setTimeout(function () {
    document.querySelector("button").classList.remove("pressedStart");
  }, 100);
  var diceList = document.querySelectorAll(".dice img");
  var gameStatus = document.querySelector("h1");
  var imgPath1 = "./images/dice" + generateRandomNumber() + ".png";
  var imgPath2 = "./images/dice" + generateRandomNumber() + ".png";
  diceList[0].setAttribute("src", imgPath1);
  diceList[1].setAttribute("src", imgPath2);

  if (imgPath1.match(/\d+/) > imgPath2.match(/\d+/)) {
    gameStatus.textContent = "🚩Player 1 Wins!";
  } else if (imgPath2.match(/\d+/) > imgPath1.match(/\d+/)) {
    gameStatus.textContent = "🚩Player 2 Wins!";
  } else {
    gameStatus.textContent = "Draw!";
  }
}

document.querySelector("button").addEventListener("click", rollDice);
