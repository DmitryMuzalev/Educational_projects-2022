const QUESTIONS = document.querySelectorAll(".question");

QUESTIONS.forEach((question) => {
  const BTN = question.querySelector(".question__btn");
  BTN.addEventListener("click", function () {
    QUESTIONS.forEach((q) => {
      if (q !== question) {
        q.classList.remove("open");
      }
    });
    question.classList.toggle("open");
  });
});
