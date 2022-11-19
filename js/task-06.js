const input = document.querySelector('#validation-input');
console.log(input);

input.addEventListener('blur', eventValue);

function eventValue(event) {
    
    if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
        return input.classList.add('invalid');
    } if (event.currentTarget.value.length == event.currentTarget.dataset.length){
        return input.classList.replace('invalid', 'valid');
    }if (event.currentTarget.value.length > event.currentTarget.dataset.length){
        return input.classList.replace('valid', 'invalid');
}};
