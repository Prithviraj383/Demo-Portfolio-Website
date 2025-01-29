// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal-text');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar Background Change on Scroll
function updateNavbar() {
  const navbar = document.querySelector('.glass-nav');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.2)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.1)';
  }
}

// Project Image Loading
function loadProjectImages() {
  const images = document.querySelectorAll('.project-pic');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
}

// Initialize
function init() {
  reveal();
  loadProjectImages();
  window.addEventListener('scroll', () => {
    reveal();
    updateNavbar();
  });
}

// Run initialization
window.addEventListener('DOMContentLoaded', init);

// Mobile Menu Toggle
const navbar = document.getElementById('navbar');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  navbar.style.display = isMenuOpen ? 'flex' : 'none';
}

// Responsive Handling
function handleResize() {
  if (window.innerWidth > 768) {
    navbar.style.display = 'flex';
    isMenuOpen = false;
  } else if (!isMenuOpen) {
    navbar.style.display = 'none';  // Hide menu on mobile if it's not explicitly opened
  }
}

// Add event listeners for resize and initial load
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Add scroll event listener to close mobile menu when scrolling
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768 && isMenuOpen) {
    toggleMenu();  // Close menu when scrolling on mobile
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && isMenuOpen) {
      toggleMenu();  // Close menu when clicking a link on mobile
    }
  });
});

// Existing code remains...

// Mobile Menu Functionality
const mobileMenu = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
let menuOpen = false;

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
}

// Event Listeners for Mobile Menu
mobileMenu.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

// Close menu when clicking a link
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) {
      toggleMobileMenu();
    }
  });
});

// Close menu when resizing to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menuOpen) {
    toggleMobileMenu();
  }
});

// Handle scroll lock when menu is open
function handleScrollLock() {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// Update scroll lock when opening/closing menu
document.addEventListener('menuToggle', handleScrollLock);

// Keep your existing initialization code...
window.addEventListener('DOMContentLoaded', init);