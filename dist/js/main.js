/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function() {
  console.log("main.js file loaded");
}));

window.onload = function() {
  const menuBtn = document.getElementById("menu-btn");
  const menuBtnOpen = document.getElementById("btn-open");
  const menuBtnClose = document.getElementById("btn-close");
  const menuNav = document.getElementById("menu-nav");

  console.log(window.screen.width);

  menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("show");
    menuBtnClose.classList.toggle("show");
    menuBtnOpen.classList.toggle("hide");
  });
};
