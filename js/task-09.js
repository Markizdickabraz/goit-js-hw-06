const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
console.log(getRandomHexColor());



const body = document.querySelector('body');
body.style.backgroundColor = getRandomHexColor();

const textSpan = document.querySelector('.color');
textSpan.textContent = body.style.backgroundColor;

console.dir(body);

const btn = document.querySelector('.change-color');
btn.addEventListener('click', event);

function event(event) {
  window.location.reload();
};