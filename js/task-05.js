const textInputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

const handlerTextInput = (event) => {
    outputEl.textContent = event.currentTarget.value;
};

textInputEl.addEventListener("input", handlerTextInput);


// textInputEl.addEventListener("blur", () => {
//     outputEl.textContent = 'Anonymous';
// });