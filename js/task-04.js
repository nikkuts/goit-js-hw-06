let counterValue = 0;
const counterValueEl = document.querySelector('span#value');
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

const handleClickDecrement = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

const handleClickIncrement = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener("click", handleClickDecrement);
buttonIncrementEl.addEventListener("click", handleClickIncrement);