// code for year and last modification in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// Use localStorage to keep track of the number of reviews completed by the user client by adding a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.
let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) : 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("reviewCounter").textContent = `You have submitted ${reviewCount} review(s) of our products.`;

// allows user to reset the page views (view counter) by clearing the counter in local storage
document.getElementById("resetCounter").addEventListener("click", () => {
    localStorage.setItem("reviewCount", 0);
    document.getElementById("reviewCounter").textContent = "You have submitted 0 review(s) of our products.";
});