function changeClass() {
  document.getElementById("nakds").classList.toggle("nk-theme--dark");
}

window.onload = function() {
  document
    .getElementById("nk-theme-change")
    .addEventListener("click", changeClass);
};
