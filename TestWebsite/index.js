const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("menu-active");

    if (hamburger.classList.contains("active") || window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("menu-active");

    if (window.scrollY === 0) {
        header.classList.remove("scrolled");
    }
}));

window.addEventListener("scroll", () => {
    if (window.scrollY > 0 || hamburger.classList.contains("active")) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

//button für plus
const add = document.getElementById("plus");
const reset = document.getElementById("reset");
const display = document.getElementById("display");
let number = 0;

add.addEventListener("click", () => {
    number++;
    display.textContent = number;
});
reset.addEventListener("click", () => {
    display.textContent = 0;
    number = 0;
});

//für die Einkaufsliste
const save = document.getElementById("save");
const Einkaufsliste = document.getElementById("Einkaufsliste");
const input = document.getElementById("input");
const clear = document.getElementById("clear");

save.addEventListener("click", () => {
    Einkaufsliste.innerHTML += '<li>'+ input.value +'</li>';
    input.value = null;
});
clear.addEventListener("click", () => {
    Einkaufsliste.innerHTML = null;
    input.value = null;
});

//für rechner
const calc = document.getElementById("calc");
let radius = document.getElementById("entry"); 

calc.addEventListener("click", () => {
    function calculate(rad) {
        return Math.PI*Math.pow(rad, 2);
    }
    const radValue = parseFloat(radius.value); // Umwandlung in eine Zahl
    if (!isNaN(radValue)) {
        const flaeche = calculate(radValue);
        alert("Die Fläche beträgt: " + flaeche);
        console.log(flaeche);
    } else {
        alert("Bitte geben Sie eine gültige Zahl ein.");
    }
    entry.value = null; 
});