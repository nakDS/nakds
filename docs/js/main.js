function changeClass() {
  document.getElementById("nakds").classList.toggle("nk-theme--dark");
}

window.onload = function() {
  document
    .getElementById("nk-theme-change")
    .addEventListener("click", changeClass);
};

function closeMenu() {
  document.getElementById("nk-nav").classList.toggle("nk-hidden");
}

window.onload = function() {
  document
    .getElementById("nk-js-close")
    .addEventListener("click", closeMenu);
};
