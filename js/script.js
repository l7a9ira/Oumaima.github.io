// ===== Mobile Navigation =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===== Header scroll effect =====
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("header-scrolled", window.scrollY > 50);
});

// ===== Smooth scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// ===== Reveal on scroll animation =====
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 100;
    if (visible) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== Animate skill bars when About section visible =====
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {
  const aboutSection = document.getElementById("about");
  const rect = aboutSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    skillBars.forEach(bar => {
      // Read width from style attribute you set in HTML
      const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+%)/);
      if (targetWidth) {
        bar.style.width = targetWidth[1];
      }
    });
    window.removeEventListener("scroll", animateSkills);
  }
}

window.addEventListener("scroll", animateSkills);
animateSkills();