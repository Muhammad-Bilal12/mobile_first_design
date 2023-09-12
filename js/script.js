const humburger = document.querySelector(".humburger");
const NavList = document.querySelector(".nav-list");

humburger.addEventListener("click", () => {
  NavList.classList.toggle("show");
});
