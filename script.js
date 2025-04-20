// Navbar hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
hamburger.addEventListener('click', function() {
    const open = navbarLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
});