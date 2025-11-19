// code for year and last modification in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// The remaining options are created dynamically using a provided product array. Each option must have a value attribute that is the product name. Normally the data would come from an external source.
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        average_rating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        average_rating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        average_rating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        average_rating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        average_rating: 5.0
    }
];

const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent =product.name;
    productSelect.appendChild(option);
})