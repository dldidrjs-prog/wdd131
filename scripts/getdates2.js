const today = new Date();

const year = today.getFullYear();

document.querySelector('#currentyear').textContent = year;
document.querySelector('#lastModified').textContent = "Last Modification: " + document.lastModified;
