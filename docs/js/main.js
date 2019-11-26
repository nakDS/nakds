// Show code

const buttonAvatar = document.querySelector('.nk-js-button--avatar');
const codeAvatar = document.querySelector('.nk-js--avatar');
const handleToggleAvatar = () => codeAvatar.classList.toggle('show');
buttonAvatar.onclick = () => handleToggleAvatar();

const buttonBox = document.querySelector('.nk-js-button--box');
const codeBox = document.querySelector('.nk-js--box');
const handleToggleBox = () => codeBox.classList.toggle('show');
buttonBox.onclick = () => handleToggleBox();

const buttonBadge = document.querySelector('.nk-js-button--badge');
const codeBadge = document.querySelector('.nk-js--badge');
const handleToggleBadge = () => codeBadge.classList.toggle('show');
buttonBadge.onclick = () => handleToggleBadge();

