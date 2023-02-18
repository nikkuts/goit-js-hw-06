const formEl = document.body.querySelector('.login-form');
// const emailEl = formEl.querySelector('input[name="email"]');
// const passwordEl = formEl.querySelector('input[name="password"]');

formEl.addEventListener("submit", onProcessesForm);

function onProcessesForm (event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені')
    } else {
        const result = {
            email: email.value,
            password: password.value,
        };
        console.log(result);
        event.currentTarget.reset();
    }
};