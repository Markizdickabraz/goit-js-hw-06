const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', eventValue);

function eventValue(event) {
   event.preventDefault();
   
    const {
        elements: { email, password } } =
        event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('NOOOOO, fields must not be empty')
    }
};
    