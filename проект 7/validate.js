document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const form = document.querySelector('.edit_form')
    const editButton = document.querySelector('.edit_button')

    const regExpName = /^[a-z0-9_-]{2,30}$/

    function btnValid(errorsCounter) {
        if (errorsCounter > 0) {
            editButton.setAttribute('disabled', true)
            editButton.classList.remove('active')
        } else {
            editButton.removeAttribute('disabled')
            editButton.classList.add('active')
        }
    }


    const validateElem = (elem, errorElem) => {
        switch (true) {
            case elem.value === '':
                errorElem.textContent = 'This is a required field!';
                return 1;
            case !regExpName.test(elem.value):
                errorElem.textContent = 'Must be between 2 and 30 characters!';
                return 1;
            default:
                errorElem.textContent = ''
                return 0;
        }
    }

    form.addEventListener('input', () => {
        let errorsCounter = 0;

        for (let elem of form.elements) {
            if (elem.tagName != 'BUTTON') {
                const error = validateElem(elem, elem.nextElementSibling)
                errorsCounter = errorsCounter + error;
            }
        }

        btnValid(errorsCounter);
    })



















})