/* VARIABLES */
const COUNTER = document.querySelector(".counter__body");
const COUNTER_VALUE = COUNTER.querySelector("#value");
const BTNs = document.querySelectorAll(".btn");
let COUNT = 0;

/* EVENTS */
BTNs.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const CL = e.currentTarget.classList;
    if (CL.contains("btn_increase")) {
      COUNT++;
      setCounter(COUNT);
    } else if (CL.contains("btn_decrease")) {
      COUNT--;
      setCounter(COUNT);
    } else {
      COUNT = 0;
      setCounter(COUNT);
    }
  });
});

/* FUNCTIONS */
function setCounter(c) {
  if (c > 0) {
    COUNTER.style.borderColor = "#15fe1e";
    COUNTER_VALUE.style.color = "#15fe1e";
  } else if (c < 0) {
    COUNTER.style.borderColor = "#fe1515";
    COUNTER_VALUE.style.color = "#fe1515";
  } else {
    COUNTER.style.borderColor = "#fed315";
    COUNTER_VALUE.style.color = "#fed315";
  }
  COUNTER_VALUE.textContent = c;
}
