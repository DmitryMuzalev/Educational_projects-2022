/* DATA */
const users = [
  {
    id: 1,
    fullName: "Priscilla Shelton",
    img: "../src/images/Priscilla Shelton.jpg",
    profession: "Model",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or words which don't look even slightly believable.",
  },
  {
    id: 2,
    fullName: "Ella Floyd",
    img: "../src/images/Ella Floyd.jpg",
    profession: "Veterinarian",
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    fullName: "Jewel Harmon",
    img: "../src/images/Jewel Harmon.jpg",
    profession: "Cameraman",
    comment:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 4,
    fullName: "Joanna Ballard",
    img: "../src/images/Joanna Ballard.jpg",
    profession: "Psychiatrist",
    comment:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
  },
  {
    id: 5,
    fullName: "Tristan Lamb",
    img: "../src/images/Tristan Lamb.jpg",
    profession: "Accountant",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or words which don't look even slightly believable. ",
  },
  {
    id: 6,
    fullName: "Mason Montgomery",
    img: "../src/images/Mason Montgomery.jpg",
    profession: "Insurance agent",
    comment:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
];

/* VARIABLE */
const PHOTO = document.querySelector(".comment__photo img");
const AUTHOR = document.querySelector(".comment__author");
const PROFESSION = document.querySelector(".comment__profession");
const TEXT = document.querySelector(".comment__text");

const BTN__NEXT = document.querySelector(".btn__next");
const BTN__PREV = document.querySelector(".btn__prev");

let index = 0;

window.addEventListener("DOMContentLoaded", function () {
  updateComment();
});

BTN__NEXT.addEventListener("click", function (e) {
  e.preventDefault();
  index++;
  if (index > users.length - 1) index = 0;
  updateComment();
});

BTN__PREV.addEventListener("click", function (e) {
  e.preventDefault();
  index--;
  if (index < 0) index = users.length - 1;
  updateComment();
});

function updateComment() {
  let USER = users[index];
  PHOTO.src = USER.img;
  PHOTO.alt = USER.fullName;
  AUTHOR.textContent = USER.fullName;
  PROFESSION.textContent = USER.profession;
  TEXT.textContent = USER.comment;
}
