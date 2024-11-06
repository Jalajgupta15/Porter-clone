// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Basic Example)
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted! We'll be in touch.");
});
