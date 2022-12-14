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

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
  const header = document.getElementById('header');

  // When the scroll is greater than or equal to
  //   50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  /* When the scroll is higher than 350 viewport height,
  add the show-scroll class to the tag with scrollup */
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK

// DARK LIGHT THEME

// SCROLL REVEAL ANIMATION
