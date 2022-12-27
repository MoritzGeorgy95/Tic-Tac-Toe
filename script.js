let fields = document.getElementsByTagName("td");
let playerOneTurn = true;
let playerTwoTurn = false;
let playerBox = document.getElementsByClassName("player")[0];
let audio = new Audio("win.mp3");
let knock = new Audio("knock.mp3");

function getElementsByTag(index) {
  return document.getElementsByTagName("td")[index];
}

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function () {
    addImage(i);
  });
}

function addImage(index) {
  knock.play();
  if (fields[index].childNodes.length == 0) {
    if (playerOneTurn) {
      createImage(fields[index], "images/sock.png");
      playerOneTurn = false;
      playerTwoTurn = true;
      playerBox.innerHTML = "Turn: Player 2";
      checkWinner();
    } else {
      createImage(fields[index], "images/tree.png");
      playerOneTurn = true;
      playerTwoTurn = false;
      playerBox.innerHTML = "Turn: Player 1";
      checkWinner();
    }
  } else {
    alert("Already taken!");
  }
}

function createImage(location, src) {
  let img = document.createElement("img");
  img.src = src;
  location.appendChild(img);
}

function checkEquality(array) {
  if (
    array.every((val, i, arr) => val === arr[0]) &&
    array.every((val, i, arr) => val != "")
  ) {
    return true;
  } else {
    return false;
  }
}

function checkWinner() {
  if (checkDiagonal() || checkColumns() || checkRows()) {
    audio.play();
    renderEndScreen();
  }
}

function checkDiagonal() {
  let diagonal1 = [
    getElementsByTag(0).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(8).innerHTML
  ];
  let diagonal2 = [
    getElementsByTag(2).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(6).innerHTML
  ];
  if (checkEquality(diagonal1) || checkEquality(diagonal2)) {
    return true;
  } else {
    return false;
  }
}

function checkRows() {
  let row1 = [
    getElementsByTag(0).innerHTML,
    getElementsByTag(1).innerHTML,
    getElementsByTag(2).innerHTML,
  ];
  let row2 = [
    getElementsByTag(3).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(5).innerHTML,
  ];
  let row3 = [
    getElementsByTag(6).innerHTML,
    getElementsByTag(7).innerHTML,
    getElementsByTag(8).innerHTML,
  ];
  if (checkEquality(row1) || checkEquality(row2) || checkEquality(row3)) {
    return true;
  } else {
    return false;
  }
}

function checkColumns() {
  let column1 = [
    getElementsByTag(0).innerHTML,
    getElementsByTag(3).innerHTML,
    getElementsByTag(6).innerHTML,
  ];
  let column2 = [
    getElementsByTag(1).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(7).innerHTML,
  ];
  let column3 = [
    getElementsByTag(2).innerHTML,
    getElementsByTag(5).innerHTML,
    getElementsByTag(8).innerHTML,
  ];
  if (
    checkEquality(column1) ||
    checkEquality(column2) ||
    checkEquality(column3)
  ) {
    return true;
  } else {
    return false;
  }
}

function renderEndScreen() {
  document.getElementsByTagName("table")[0].classList.add("d-none");
  let endScreen = document.createElement("h2");
  endScreen.classList.add("winner");
  playerBox.innerHTML = "Game Over";
  if (playerOneTurn) {
    endScreen.innerHTML = "Player 2 is the Winner!";
    document.body.appendChild(endScreen);
  } else {
    endScreen.innerHTML = "Player 1 is the Winner!";
    document.body.appendChild(endScreen);
  }
}
