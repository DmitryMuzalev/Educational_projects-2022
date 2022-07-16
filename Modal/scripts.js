const BTN_LOGIN = document.querySelector(".login-btn");
const MODAL_OVERLAY = document.querySelector(".modal__overlay");
const BTN_CLOSE = MODAL_OVERLAY.querySelector(".modal__close");

BTN_LOGIN.addEventListener("click", function (e) {
  e.preventDefault();
  openModalWindow();
});

BTN_CLOSE.addEventListener("click", function (e) {
  e.preventDefault();
  closeModalWindow();
});

function openModalWindow() {
  MODAL_OVERLAY.classList.add("show");
  MODAL_OVERLAY.addEventListener("click", function (e) {
    if (!e.target.closest(".modal")) {
      closeModalWindow();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) closeModalWindow();
  });
}

function closeModalWindow() {
  MODAL_OVERLAY.classList.remove("show");
}
