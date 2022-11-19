const form = document.querySelector('.login-form');
console.log(form);



form.addEventListener('submit', eventValue);

function eventValue(event) {
   
   const {
       elements: { email, password } } =
          event.currentTarget;
   const newObject = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
   };
    console.dir(newObject);
    event.preventDefault();

  email.value === "" || password.value === "" ? alert('NOOOOO, fields must not be empty'):
    document.querySelector('.login-form').reset();
};






// function eventValue(event) {
//    event.preventDefault();
//    const formData = new FormData(event.currentTarget);
//    formData.forEach((value, name) => {
//       console.log(value);
//       console.log(name);
//    }
//    )
// }