//Code für Hamburger Menü
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

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("menu-active");

    if (window.scrollY === 0) {
      header.classList.remove("scrolled");
    }
  })
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 || hamburger.classList.contains("active")) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
//Bis hier

AOS.init({
  easing: 'ease-out',
  once: true,
  offset: 100
});

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY; // Holen der aktuellen Scrollposition

  // Berechnen der Bewegung der Blüten
  let flower1 = document.getElementById('flower1');
  let flower2 = document.getElementById('flower2');
  let flower3 = document.getElementById('flower3');
  let flower4 = document.getElementById('flower4');
  let flower5 = document.getElementById('flower5');
  // Bewege die Blüten basierend auf der Scrollposition
  flower1.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  flower2.style.transform = `translateY(${scrollPosition * 0.15}px)`;
  flower3.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  flower4.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  flower5.style.transform = `translateY(${scrollPosition * 0.22}px)`;
});
