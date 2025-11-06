// code for weather wind chill
const temp = 9.7;
const wind = 18;

const calculateWindChill = (t, v) => (t <= 10 && v > 4.8) ? (13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16).toFixed(1) : "N/A";

document.querySelector("#windchill").textContent = calculateWindChill(temp, wind);

// code for year and last modification in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;