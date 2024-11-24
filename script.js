document.addEventListener("DOMContentLoaded", () => {
    // Filter portfolio by category
    const filterButtons = document.querySelectorAll(".filter-btn");
    const photoCards = document.querySelectorAll(".photo-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            photoCards.forEach(card => {
                card.style.display = category === "all" || card.getAttribute("data-category") === category ? "block" : "none";
            });
        });
    });
});
// Custom JavaScript for animations or future functionality

// Add smooth scrolling (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript to add "scrolled" class on scroll
window.onscroll = function () {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
// JavaScript to add "scrolled" class on scroll
window.onscroll = function () {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');

function moveSlide(direction) {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].style.display = 'block';
}

// Initially display the first slide
slides[currentIndex].style.display = 'block';

// Set up the automatic sliding
setInterval(() => {
    moveSlide(1);  // Automatically move to the next slide
}, 5000);  // Change slide every 5 seconds (5000 milliseconds)



    let lastScrollTop = 0; // Store last scroll position

    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // If we are scrolling down
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('navbar-hidden'); // Add the class to hide the navbar
        } else {
            navbar.classList.remove('navbar-hidden'); // Remove the class to show the navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    });

