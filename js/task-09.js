function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.body.querySelector('button.change-color');
const valueColorEl = document.body.querySelector('span.color');

buttonChangeColorEl.addEventListener("click", onСhangesСolor);

function onСhangesСolor (event) {
  const randomColor = getRandomHexColor();  
  document.body.style.backgroundColor = randomColor;
    valueColorEl.textContent = randomColor;
}