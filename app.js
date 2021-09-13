let cells = document.querySelectorAll(".row > div");
let turnCount = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(e) {
  if(turnCount % 2 == 0) {
  e.target.textContent = 'X';
} else {
  e.target.textcontent = "O";
}

turnCount++
  checkWin();
}

function checkWin() {
  if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent) {
      alert("EX WIN")
  } else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent) {
    alert("I GUESS YOU WIN")
  } else if (cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent) {
    alert("I GUESS YOU WIN")
}  else if (cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent) {
  alert("I GUESS YOU WIN")}
  else if (cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent) {
    alert("I GUESS YOU WIN")}
    else if (cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent) {
      alert("I GUESS YOU WIN")}
      else if (cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent) {
        alert("I GUESS YOU WIN")}
        else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent) {
          alert("I GUESS YOU WIN")}
  }