const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const resetbtn = document.querySelector("#reset");
const selectingWinningScore = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
winningScore = parseInt(selectingWinningScore.value);

resetbtn.addEventListener("click", reset);
function reset() {
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = p1Score;
   p2Display.textContent = p2Score;
   p2Display.classList.remove("winner", "loser");
   p1Display.classList.remove("loser", "winner");
}
selectingWinningScore.addEventListener("change", function () {
   winningScore = parseInt(this.value);
   reset();
});
p1btn.addEventListener("click", function () {
   if (!gameOver) {
      p1Score++;
      p1Display.textContent = p1Score;
      if (p1Score === winningScore) {
         gameOver = true;
         p1Display.classList.add("winner");
         p2Display.classList.add("loser");
      }
   }
});
p2btn.addEventListener("click", function () {
   if (!gameOver) {
      p2Score++;
      p2Display.textContent = p2Score;
      if (p2Score === winningScore) {
         gameOver = true;
         p2Display.classList.add("winner");
         p1Display.classList.add("loser");
      }
   }
});

selectingWinningScore.addEventListener("input", function () {
   winningScore = parseInt(this.value);
});
