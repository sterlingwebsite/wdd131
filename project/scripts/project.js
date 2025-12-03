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
document.querySelectorAll('.carousel').forEach(carousel => {
    const cards = carousel.querySelectorAll('.card');
    let currentIndex = 0;
    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i == index);
        });
    }
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex -1 + cards.length) % cards.length;
            showCard(currentIndex);
        });
    }
    showCard(currentIndex);
});

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
        "budget-wisely-reflection",
        "eliminate-debt-reflection",
        "build-wealth-reflection",
        "identity-first-reflection",
        "make-it-obvious-reflection",
        "make-it-attractive-reflection",
        "make-it-easy-reflection",
        "make-it-satisfying-reflection",
        "prosperity-as-legacy-reflection",
        "reflection-&-application-reflection"
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

// // scroll animation
// const sections = document.querySelectorAll("section");
// window.addEventListener("scroll", () => {
//     sections.forEach(sec => {
//         const rect = sec.getBoundingClientRect();
//         if (rect.top < window.innerHeight -100) {
//             sec.classList.add("visible");
//         }
//     });
// });

// collapse/expand <h5>
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".collapsible").forEach(element => {
        element.classList.add("collapsed");
        element.addEventListener("click", () => {
            element.classList.toggle("collapsed");
        });
    });
});