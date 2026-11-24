// Toggle mobile navigation menu
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Greeting button
const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", () => {
    alert("Hello! Thanks for visiting my website, Azim.");
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove("active"); // close menu on mobile
    });
});