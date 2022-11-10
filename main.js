// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};

navLinks.forEach((link) => {
  link.addEventListener('click', linkAction);
});

// CHANGE HEADER BACKGROUND

// SHOW SCROLL UP

// SCROLL SECTIONS ACTIVE LINK

// DARK LIGHT THEME

// SCROLL REVEAL ANIMATION
