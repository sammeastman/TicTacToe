let cells = document.querySelectorAll(".row > div");
let turnCount = 0;
let wins = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(e) {
  console.log("test");
  if (turnCount % 2 == 0) {
    e.target.textContent = "X";
  } else {
    e.target.textContent = "O";
  }

  turnCount++;
  checkWin();
}

function checkWin() {
  for (let i = 0; i < wins.length; i++) {
    let xCount = 0;
    let oCount = 0;

    for (let j = 0; j < wins[i].length; j++) {
      if (wins[i][j].textContent == "X") {
        xCount++;
      } else if (wins[i][j].textContent == "O") {
        oCount++;
      }
    }

    if (xCount == 3) {
      alert("X Wins!");
    } else if (oCount == 3) {
      alert("O Wins");
    }
  }
}