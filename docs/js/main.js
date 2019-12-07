// Show code

const buttonAvatar = document.querySelector(".nk-js-button--avatar");
const codeAvatar = document.querySelector(".nk-js--avatar");
buttonAvatar.onclick = () => codeAvatar.classList.toggle("show");

const buttonCard = document.querySelector(".nk-js-button--card");
const codeCard = document.querySelector(".nk-js--card");
buttonCard.onclick = () => codeCard.classList.toggle("show");

const buttonDarkMode = document.querySelector(".nk-js-button--dark-mode");
const darkMode = document.getElementById("nakds");
buttonDarkMode.onclick = () => darkMode.classList.toggle("nk-theme--dark");
