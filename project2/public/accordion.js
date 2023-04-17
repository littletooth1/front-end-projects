"use strict";
(function () {

    const accordionEl = document.querySelector('.accordion');


    accordionEl.addEventListener('click', (e) => {
        let accordionButtonEl;
        if (e.target.classList.contains('accordion-title') || e.target.classList.contains('accordion-button')) {
            if (e.target.classList.contains('accordion-title')) {
                accordionButtonEl = e.target.closest('.accordion-button');
            } else {
                accordionButtonEl = e.target;
            }
            const expanded = accordionButtonEl.getAttribute('aria-expanded');
            accordionButtonEl.classList.toggle('accordion-button-open');
            if (expanded === "false") {
                accordionButtonEl.setAttribute('aria-expanded', "true");
            } else {
                accordionButtonEl.setAttribute('aria-expanded', "false");
            }
        }
    })

    let count = 0;
    const countButtonEl = document.querySelector('.count-button');

    const countEl = document.querySelector('.cats-count');
    countButtonEl.addEventListener('click', () => {
        const increaseEl = document.querySelector('.count-increase');

        count += 1;
        countEl.innerText = count;
        increaseEl.classList.add('count-increase-show');
        setTimeout(function() {
            increaseEl.classList.remove('count-increase-show');
        }, 500);

    });

})();