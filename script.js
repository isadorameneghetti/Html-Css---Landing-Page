const menuIcon = document.querySelector('#menu-icon');
const navigation = document.querySelector('.navigation');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navigation.classList.toggle('active');
    navbg.classList.toggle('active');
});