// ===============================
// PREMIUM PORTFOLIO UX ENGINE
// Phase 3 – Professional JavaScript
// ===============================

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* ===============================
   SECTION CARD LAYOUT (STRUCTURAL ONLY)
   =============================== */
.section-card {
  background: var(--bg-card);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 3rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}

// ===============================
// Typing Effect (Hero Title)
// ===============================
const titles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Applied Statistician",
  "AI Product Builder"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 1200;

const typingElement = document.getElementById("typing-text");

function typeLoop() {
  if (!typingElement) return;

  const current = titles[titleIndex];
  if (!isDeleting) {
    typingElement.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      setTimeout(() => isDeleting = true, pauseTime);
    }
  } else {
    typingElement.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

typeLoop();

// ===============================
// Scroll Reveal Animations
// ===============================
const revealElements = document.querySelectorAll("section, .project-case, .skill-badge");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => {
  el.classList.add("reveal-hidden");
  revealObserver.observe(el);
});

// ===============================
// Scroll Progress Bar
// ===============================
const progressBar = document.createElement("div");
progressBar.id = "scroll-progress";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
});

// ===============================
// Sticky Navbar Shadow
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ===============================
// Project Hover Micro-Interactions
// ===============================
const projectCards = document.querySelectorAll(".project-case");

projectCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// ===============================
// Dynamic Year Footer
// ===============================
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===============================
// Performance Optimizations
// ===============================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===============================
// Minimal CSS Injection for Animations
// ===============================
const style = document.createElement("style");
style.innerHTML = `
  .reveal-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .reveal-active {
    opacity: 1;
    transform: translateY(0);
  }

  #scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(to right, #00d4ff, #6ae3ff);
    z-index: 9999;
  }

  .navbar-scrolled {
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }
`;
document.head.appendChild(style);
