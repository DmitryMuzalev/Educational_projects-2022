/* VARIABLES */
const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const BTN_GENERATE = document.querySelector(".btn_generate");
const COLOR = document.querySelector(".palette__color");
const COLOR_TEXT = document.getElementById("color");

/* EVENTS */
BTN_GENERATE.addEventListener("click", setNewColor);

/* FUNCTIONS */
function getNewColor(data) {
  let NEW_COLOR = "#";
  for (let i = 0; i < 6; i++) {
    let INDEX = Math.trunc(Math.random() * DATA.length);
    NEW_COLOR += DATA[INDEX];
  }
  return NEW_COLOR;
}

function setNewColor(e) {
  e.preventDefault();
  let NEW_COLOR = getNewColor(DATA);
  COLOR.style.backgroundColor = NEW_COLOR;
  COLOR_TEXT.style.color = NEW_COLOR;
  COLOR_TEXT.textContent = NEW_COLOR;
}
