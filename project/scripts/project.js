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

if (document.querySelector('.next')) {
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex +1) % cards.length;
        showCard(currentIndex);
    });
}

if (document.querySelector('.prev')) {
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });
}

// principles.html
// saving reflections function
function saveReflection(id) {
    const note = document.getElementById(id).value.trim();
    localStorage.setItem(id, note);
    alert("Your reflection has been saved to your browser's local storage.");
}

// loading the saved reflections when page opens
document.addEventListener("DOMContentLoaded", () => {
    const reflectionIds = [
        "gratitude-reflection",
        "tithing-reflection",
        "eternal-perspective-reflection",
    ];
    reflectionIds.forEach(id => {
        const savedNote = localStorage.getItem(id);
        if (savedNote) {
            const element = document.getElementById(id);
            if (element) {
                element.value = savedNote;
            }
        }
    });
});