// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! We will contact you soon.');
  form.reset();
});