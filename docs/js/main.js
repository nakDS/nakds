function changeClass() {
  document.getElementById("nakds").classList.toggle("nk-theme--dark");
}

function closeMenu() {
  document.getElementById("nk-nav").classList.toggle("nk-hidden");
}


window.onload = function() {
  document
    .getElementById("nk-theme-change")
    .addEventListener("click", changeClass)
    .getElementById("nk-js-close")
    .addEventListener("click", closeMenu);
};
