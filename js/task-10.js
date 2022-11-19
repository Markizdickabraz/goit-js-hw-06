function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  controls: document.querySelector('#controls'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  input: controls.firstElementChild.value,
  boxes: document.querySelector('#boxes'),
};

console.dir(refs.controls);
console.log(refs.input);
