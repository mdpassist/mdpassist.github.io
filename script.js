// ==============================
// MDP Assist Landing Page
// script.js
// ==============================


// ==============================
// Intro Animation Control
// ==============================

document.body.style.overflow = "hidden";

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("intro-screen");

        if (intro) {
            intro.style.display = "none";
        }

        document.body.style.overflow = "auto";

    }, 6000);

});



// ==============================
// Contact Popup
// ==============================

document.addEventListener("DOMContentLoaded", () => {


    const contactButton = document.getElementById("contactButton");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");


    if (contactButton && popup) {

        contactButton.addEventListener("click", () => {

            popup.style.display = "flex";

        });

    }


    if (closePopup && popup) {

        closePopup.addEventListener("click", () => {

            popup.style.display = "none";

        });

    }


    window.addEventListener("click", (event) => {

        if (event.target === popup) {

            popup.style.display = "none";

        }

    });


});



// ==============================
// Fade-in Animation On Scroll
// ==============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries) => {


    entries.forEach((entry) => {


        if (entry.isIntersecting) {


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });


}, {

    threshold:0.2

});



sections.forEach((section) => {


    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 0.8s ease";


    observer.observe(section);


});
