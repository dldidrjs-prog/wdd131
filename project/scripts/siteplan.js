const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const hammenu = document.querySelector("#menu");
const nav = document.querySelector(".nav-flex");

hammenu.addEventListener("click", () => {
    hammenu.classList.toggle("open");
    nav.classList.toggle("open");
});