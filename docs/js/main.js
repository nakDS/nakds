// Show code

const buttonAvatar = document.querySelector(".nk-js-button--avatar");
const codeAvatar = document.querySelector(".nk-js--avatar");
buttonAvatar.onclick = () => codeAvatar.classList.toggle("show");

const buttonBadge = document.querySelector(".nk-js-button--badge");
const codeBadge = document.querySelector(".nk-js--badge");
buttonBadge.onclick = () => codeBadge.classList.toggle("show");

const buttonCard = document.querySelector(".nk-js-button--card");
const codeCard = document.querySelector(".nk-js--card");
buttonCard.onclick = () => codeCard.classList.toggle("show");

const buttonDarkMode = document.querySelector(".nk-js-button--dark-mode");
const darkMode = document.getElementById("nakds");
buttonDarkMode.onclick = () => darkMode.classList.toggle("nk-theme--dark");

const buttonNavOpen = document.querySelector(".nk-js-button--nav-open");
const navOpen = document.querySelector(".nk-js--nav");
const dimmerOpen = document.querySelector(".nk-dimmer");
buttonNavOpen.onmouseover = () =>
  navOpen.classList.toggle("nk-is-open") +
  dimmerOpen.classList.toggle("nk-is-open");

const closeNav = document.querySelector(".nk-js--nav");
closeNav.onclick = () =>
  navOpen.classList.toggle("nk-is-open") +
  dimmerOpen.classList.toggle("nk-is-open");

const closeDimmer = document.querySelector(".nk-dimmer");
closeDimmer.onclick = () =>
  navOpen.classList.toggle("nk-is-open") +
  dimmerOpen.classList.toggle("nk-is-open");
