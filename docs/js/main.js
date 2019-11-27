// Show code

const buttonAvatar = document.querySelector(".nk-js-button--avatar");
const codeAvatar = document.querySelector(".nk-js--avatar");
buttonAvatar.onclick = () => codeAvatar.classList.toggle("show");

const buttonBox = document.querySelector(".nk-js-button--box");
const codeBox = document.querySelector(".nk-js--box");
buttonBox.onclick = () => codeBox.classList.toggle("show");

const buttonDarkMode = document.querySelector(".nk-js-button--dark-mode");
const darkMode = document.getElementById("nakds");
buttonDarkMode.onclick = () => darkMode.classList.toggle("nk-theme--dark");
