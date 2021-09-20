const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const navContainer = document.querySelector('nav');

open_btn.addEventListener('click', () => {
    nav.forEach((nav_el) => nav_el.classList.add('visible'));
    navContainer.classList.add('visible');
    open_btn.classList.add('visible');
});

close_btn.addEventListener('click', () => {
    nav.forEach((nav_el) => nav_el.classList.remove('visible'));
    navContainer.classList.remove('visible');
    open_btn.classList.remove('visible');
});
