let cells = document.querySelectorAll(".row > div");
let turnCount = 0;
let wins = [

[cells[0], cells [1], cells [2]],
[cells[3], cells [4], cells [5]],
[cells[6], cells [7], cells [8]],
[cells[0], cells [3], cells [6]],
[cells[1], cells [4], cells [7]],
[cells[2], cells [5], cells [8]],
[cells[0], cells [4], cells [8]],
[cells[2], cells [4], cells [6]],

];

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked)
}

function cellClicked(e) {
  if (turnCount % 2 == 0) {
  e.target.textContent = 'X';
} else {
  e.target.textcontent = "O";
}

turnCount++
  checkWin();
}

function checkWin() {
for (let i = 0; i < wins.length; i++) {
let xCount = 0;
let oCount = 0;
  
for (let j = 0; j < wins[i].length; j++) {
  if (cells[i].textContent == "X") {
    xCount++
  } else if (cells[i].textContent == "O") {
    oCount++
  }
}

if (xCount == 3) {
  alert("X Wins!");
} else if (oCount == 3) {

}
  }
}
  //   if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent) {
//       alert("EX WIN")
//   } else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent) {
//     alert("I GUESS YOU WIN")
//   } else if (cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent) {
//     alert("I GUESS YOU WIN")
// }  else if (cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent) {
//   alert("I GUESS YOU WIN")}
//   else if (cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent) {
//     alert("I GUESS YOU WIN")}
//     else if (cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent) {
//       alert("I GUESS YOU WIN")}
//       else if (cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent) {
//         alert("I GUESS YOU WIN")}
//         else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent) {
//           alert("I GUESS YOU WIN")}
//   }