// ===================== Typing Effect =====================
const typingText = document.getElementById("typing-text");
const phrases = [
  "Data Scientist",
  "Applied Statistician",
  "Machine Learning Engineer",
  "Predictive Modeler",
  "Risk Analytics Specialist"
];

let phraseIndex = 0;
let letterIndex = 0;
let typingSpeed = 100; // ms per letter
let erasingSpeed = 50; 
let delayBetweenPhrases = 2000;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typingText.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (letterIndex > 0) {
    typingText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, 500);
});

// ===================== Smooth Scrolling =====================
const navLinks = document.querySelectorAll("a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for fixed navbar height
        behavior: "smooth"
      });
    }
  });
});

// ===================== Fade-In Sections on Scroll =====================
const sections = document.querySelectorAll("section");
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target); // animate only once
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
