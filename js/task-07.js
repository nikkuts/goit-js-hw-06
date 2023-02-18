const fontSizeControlEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

fontSizeControlEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize (event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};


