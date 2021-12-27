// Menu Show & Hide
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Show Menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

// Close Menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})