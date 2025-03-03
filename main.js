const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menubtn.addEventListener('click', () => {
    menu.classList.toggle('show');

});