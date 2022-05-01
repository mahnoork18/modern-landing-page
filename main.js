// cta close mobile menu
const menu = document.querySelector(".mobile-menu");
const menu_btn = document.getElementById("cta");
const close_btn = document.getElementById("close");

menu_btn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

close_btn.addEventListener("click", function () {
  menu.classList.remove("show");
});
