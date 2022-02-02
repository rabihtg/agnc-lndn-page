const headerNavCont = document.querySelector(".headerNav");
const navBtn = document.querySelector(".nav-btn");
const navItems = document.querySelector(".header__nav-item-cont");
const body = document.querySelector("body");

navBtn.addEventListener("click", function () {
  navItems.classList.toggle("header__nav-item-cont--on");
  headerNavCont.classList.remove("start");
  headerNavCont.classList.toggle("on");
  headerNavCont.classList.toggle("off");
  body.classList.toggle("no-scroll");
});
window.onresize = function () {
  let x = window.innerWidth;
  if (x > 768) {
    body.classList.remove("no-scroll");
    headerNavCont.classList.remove("on");
    headerNavCont.classList.add("off");
    navItems.classList.remove("header__nav-item-cont--on");
    headerNavCont.classList.add("start");
  }
};
