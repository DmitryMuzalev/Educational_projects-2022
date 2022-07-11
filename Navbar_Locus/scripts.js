const BTN_MENU = document.querySelector(".menu__icon");
const MENU = document.querySelector(".menu__body");
const MENU_LINKS = MENU.querySelectorAll(".menu__link");

BTN_MENU.addEventListener("click", function () {
  MENU.classList.toggle("active");
  BTN_MENU.classList.toggle("active");
});

for (let i = 0; i < MENU_LINKS.length; i++) {
  MENU_LINKS[i].addEventListener("click", function () {
    MENU_LINKS.forEach((e) => e.classList.remove("active"));
    MENU_LINKS[i].classList.add("active");
  });
}
