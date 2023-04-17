"use strict";
(function () {

    const modalEl = document.querySelector('.modal');
    const cardsEl = document.querySelector('.cards');
    const closeEl = document.querySelector('.cancel-button');


    cardsEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('subscribe-button')) {
            modalEl.showModal();
        }
    })

    closeEl.addEventListener('click', () => {
        modalEl.close();
    })


    const emailEl = document.querySelector('#email');
    const confirmEl = document.querySelector('#confirm-email');
    const emailErrorEl = document.querySelector('.email-error');
    const confirmErrorEl = document.querySelector('.confirm-error');
    const requiredMessage = "This field is required";
    const validEmailMessage = "This field be a valid email address including a @";
    const unmatchMessage = "This field should match the Email you input above";

    function showError(inputEl, errorEl, errorMessage) {
        inputEl.classList.add('invalid');
        errorEl.innerText = errorMessage;
    }

    function removeError(inputEl, errorEl) {
        inputEl.classList.remove('invalid');
        errorEl.innerText = "";
    }

    emailEl.addEventListener('input', (e) => {
        emailEl.addEventListener('blur', (e) => {
            if(!emailEl.value){
                showError(emailEl,emailErrorEl,requiredMessage);
            } else if (emailEl.value.indexOf('@') < 0) {
                showError(emailEl,emailErrorEl,validEmailMessage);
            }
        })
        if (!emailEl.value) {
            showError(emailEl,emailErrorEl,requiredMessage);
        } else {
            removeError(emailEl,emailErrorEl);
        }
    })

    confirmEl.addEventListener('input',(e)=>{
        removeError(confirmEl,confirmErrorEl);
        confirmEl.addEventListener('blur',(e)=> {
            if (confirmEl.value !== emailEl.value) {
                showError(confirmEl,confirmErrorEl,unmatchMessage);
            }
        })
    })


    const formEl = document.querySelector('.form');
    formEl.addEventListener('submit', (event) => {
        let isFormValid = false;
        removeError(emailEl,emailErrorEl);
        removeError(confirmEl,confirmErrorEl);

        if (!emailEl.value) {
            showError(emailEl,emailErrorEl,requiredMessage);
            isFormValid = true;
        } else if (emailEl.value.indexOf('@') < 0) {
            showError(emailEl,emailErrorEl,validEmailMessage);
            isFormValid = true;
        }

        if (confirmEl.value !== emailEl.value) {
            showError(confirmEl,confirmErrorEl,unmatchMessage);
            isFormValid = true;
        }

        if (isFormValid) {
            event.preventDefault();
        }
    })
})();