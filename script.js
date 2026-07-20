// ==============================
// MDP Assist Landing Page
// script.js
// ==============================

// Contact popup
const contactButton = document.getElementById("contactButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

contactButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close popup when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
