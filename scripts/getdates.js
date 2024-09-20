const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

yearElement.innerText = new Date().getFullYear()
lastModifiedElement.innerText = document.lastModified