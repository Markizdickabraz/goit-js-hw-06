const form = document.querySelector('.login-form');
console.log(form);



form.addEventListener('submit', eventValue);

function eventValue(event) {
   
   
   const {
       elements: { email, password } } =
          event.currentTarget;
    console.log(email.value, password.value);
    event.preventDefault();

  email.value === "" || password.value === "" ? alert('NOOOOO, fields must not be empty'):
    document.querySelector('.login-form').reset();
};
