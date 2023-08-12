const hamburger = document.querySelector(".hamburger ");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
