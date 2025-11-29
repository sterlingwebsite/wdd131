// code for year and last modification in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// event listener
document.addEventListener("DOMContentLoaded", () => {
    console.log("Prosperity with Purpose loaded.");
});

// script for hamburger menu
const menuToggle = document.querySelector('#hamburger');
const nav = document.querySelector('nav')

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    menuToggle.textContent = isOpen ? '✖' : '☰';
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// carousel cards
const cards = document.querySelectorAll('.card');
let currentIndex = 0;
function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('active', i == index);
    });
}
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex +1) % cards.length;
    showCard(currentIndex);
});
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});