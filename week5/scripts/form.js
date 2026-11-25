const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productName = document.querySelector("#productName");

products.forEach(function (product) {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productName.append(option);
});


const dateInput = document.querySelector("#date");

dateInput.addEventListener("click", function() {
    dateInput.showPicker();
});