// ===== TYPING ANIMATION =====
const roles = [
  "Statistician",
  "Data Analyst",
  "Machine Learning Practitioner",
  "Python | R | SQL",
  "Streamlit | Power BI | Tableau"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// ===== CAROUSEL AUTO ROTATE =====
const carousel = document.querySelector(".carousel");
let scrollAmount = 0;

function autoScroll() {
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  } else {
    scrollAmount += 260; // width + gap
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
}

setInterval(autoScroll, 3000);
