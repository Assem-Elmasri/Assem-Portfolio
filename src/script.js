// bar menu toggle
const bar = document.querySelector(".fa-bars");
const ul = document.querySelector("nav ul");
bar.addEventListener("click", () => {
  ul.classList.toggle("hidden");
});

// handling pop-up
const hireMeBtn = document.getElementById("hire-me-btn");
const popUp = document.querySelector("div.fixed");
const closePopUp = document.querySelector("div.fixed form button#close-btn");
hireMeBtn.addEventListener("click", () => {
  popUp.classList.toggle("hidden");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.toggle("hidden");
});