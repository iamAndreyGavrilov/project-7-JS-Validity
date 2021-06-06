document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const form = document.querySelector('.edit_form')
    const editButton = document.querySelector('.edit_button')

    const regExpName = /^[a-z0-9_-]{2,30}$/


    const validateElem = (elem) => {

        if (!regExpName.test(elem.value) && elem.value != '') {
            elem.nextElementSibling.textContent = 'Must be between 2 and 30 characters!'
        } else {
            elem.nextElementSibling.textContent = ''
            btnValid()
        }
    }


    for (let elem of form.elements) {
        if (elem.tagName != 'BUTTON') {
            elem.addEventListener('blur', () => {
                validateElem(elem)
            })
        }
    }


    form.addEventListener('input', (event) => {
        event.preventDefault()
        for (let elem of form.elements) {
            if (elem.tagName != 'BUTTON') {
                if (elem.value === '') {
                    elem.nextElementSibling.textContent = 'Это обязательное поле!'
                } else {
                    elem.nextElementSibling.textContent = ''
                }
            }
        }
    })



    function btnValid() {
        for (let elem of form.elements) {
            if (elem.tagName != 'BUTTON') {
                if (elem.value === '') {
                    editButton.setAttribute('disabled', true)
                    editButton.classList.remove('active')
                } else {
                    editButton.removeAttribute('disabled')
                    editButton.classList.add('active')
                }
            }
        }
    }

















})