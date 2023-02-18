const textInputEl = document.querySelector('input[data-length="6"]');

const onCheckNumberSymbols = (event) => { 
    if(event.currentTarget.value.length === Number(textInputEl.dataset.length)) {
        textInputEl.classList.remove("invalid");
        textInputEl.classList.add("valid");
    } else {
        textInputEl.classList.remove("valid");
        textInputEl.classList.add("invalid");
    }
};

textInputEl.addEventListener("blur", onCheckNumberSymbols);