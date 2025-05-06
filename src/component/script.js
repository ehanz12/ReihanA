// Mobile Nav Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Toggle icon and save preference
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});