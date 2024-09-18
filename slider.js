const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 4000); // Change slide every 4 seconds

document.getElementById('navToggle').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar-nav');
    navbar.classList.toggle('show-nav');
});
