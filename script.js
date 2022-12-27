let fields = document.getElementsByTagName("td");
let playerOneTurn = true;
let playerTwoTurn = false;

function getElementsByTag(index) {
  return document.getElementsByTagName("td")[index];
}

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function () {
    addImage(i);
  });
}

function addImage(index) {
  if (fields[index].childNodes.length == 0) {
    if (playerOneTurn) {
      createImage(fields[index], "images/sock.png");
      playerOneTurn = false;
      playerTwoTurn = true;
      checkWinner();
    } else {
      createImage(fields[index], "images/tree.png");
      playerOneTurn = true;
      playerTwoTurn = false;
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
  if(array.every((val, i, arr) => val === arr[0]) && array.every((val, i, arr) => val != "")) {
    return true
  }
  else {
    return false
  }
}


function checkWinner() {
   if(checkDiagonal() || checkColumns() || checkRows()) {
    alert('You won!')
   }
   else {
    console.log('still no winner')
   }

 }

function checkDiagonal() {
  let diagonal = [
    getElementsByTag(0).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(8).innerHTML,
  ];
  if (checkEquality(diagonal)) {
    return true
  }

  else {
    return false
  }
}

function checkRows() {
  let row1= [
    getElementsByTag(0).innerHTML,
    getElementsByTag(1).innerHTML,
    getElementsByTag(2).innerHTML,
  ];
  let row2= [
    getElementsByTag(3).innerHTML,
    getElementsByTag(4).innerHTML,
    getElementsByTag(5).innerHTML,
  ];
  let row3= [
    getElementsByTag(6).innerHTML,
    getElementsByTag(7).innerHTML,
    getElementsByTag(8).innerHTML,
  ];
  if(checkEquality(row1) || checkEquality(row2) || checkEquality(row3)) {
     return true
   }
   else {
    return false
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
  if(checkEquality(column1) || checkEquality(column2) || checkEquality(column3)) {
    return true
  }
  else {
   return false
  }
}