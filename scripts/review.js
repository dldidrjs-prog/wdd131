
const savedCount = localStorage.getItem("reviewCount");
const nextCount = Number(savedCount) + 1;

localStorage.setItem("reviewCount", nextCount);
console.log(nextCount);

document.querySelector("#totalcount").textContent = nextCount;

