const menu = document.querySelector('header');
const burgerButtom = document.querySelector('.burger-menu');
const mobile = window.matchMedia('screen and (max-width: 767px)')

// burgerButtom.addEventListener('click', hideShow);

mobile.addEventListener('change',validation)

function validation(event) {
    if (event.matches) {
        burgerButtom.addEventListener('click', hideShow);
    } else {
        burgerButtom.removeEventListener('click', hideShow);
    }
}

validation(mobile)


function hideShow() {
    menu.classList.toggle('menu-active');
}