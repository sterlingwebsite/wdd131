// script for creating dates in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// script for hamburger menu
const menuToggle = document.querySelector('.temples #hamburger');
const nav = document.querySelector('.temples nav')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.textContent = nav.classList.contains('show') ? '✖' : '☰';
});