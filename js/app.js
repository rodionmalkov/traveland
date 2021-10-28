const burgerBtn = document.querySelector(".burger");
const navList = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav--active");
});
