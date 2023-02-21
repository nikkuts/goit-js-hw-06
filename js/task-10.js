function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;
const elAll = [];
const basicSize = 30;
const ref = {
  inputNumber: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  elementsBoxes: document.querySelector('div#boxes'),
}

ref.inputNumber.addEventListener("change", onGetsNumber);
ref.buttonCreate.addEventListener("click", onCreateBoxes);
ref.buttonDestroy.addEventListener("click", onDestroyBoxes);

function onGetsNumber (event) {
  if (event.currentTarget.value % 1 !== 0 || 
      event.currentTarget.value < 1 || 
      event.currentTarget.value > 100) {
    alert(`Вкажіть ціле число від ${ref.inputNumber.min} до ${ref.inputNumber.max}`);
  } else {
    amount = Number(event.currentTarget.value);
    console.log(amount);
  }
  event.currentTarget.value = '';   
}

function createBoxes (amount) {
  for (let i = 0; i < amount; i += 1) {
    let el = document.createElement("div");
    let size = basicSize + i * 10;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    elAll.push(el);
    console.log(el);
  }
  ref.elementsBoxes.append(...elAll);
  elAll.splice(0, amount - 1);
}

function onCreateBoxes (event) {
  if (amount === undefined) {
    alert(`Вкажіть у полі зліва ціле число від ${ref.inputNumber.min} до ${ref.inputNumber.max}`);
  } else {
    createBoxes(amount); 
  }
  amount = 0;
}

function onDestroyBoxes () {
  ref.elementsBoxes.innerHTML = '';
}

