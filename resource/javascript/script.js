const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

const mobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};
// toggle hamburger
hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav__link");

const closeMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

// close hamburger when any nav menu pressed
navLink.forEach((n) => n.addEventListener("click", closeMenu));
