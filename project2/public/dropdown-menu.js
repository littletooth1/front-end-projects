"use strict";
(function () {

    const dropdownEl = document.querySelector('.dropdown-button');
    const menuEl = document.querySelector('.header-menu');
    dropdownEl.addEventListener('click',() => {
        menuEl.classList.toggle('dropdown-open');
    })
})();