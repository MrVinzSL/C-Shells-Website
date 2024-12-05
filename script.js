let navbar = document.querySelector('.navbar');
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}