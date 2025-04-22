document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger menu, navigation, and overlay elements
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navigation = document.querySelector('.navbar nav');
  const overlay = document.querySelector('.overlay');
  
  // Toggle menu function
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Toggle body scroll
    if (navigation.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Event listeners
  hamburgerMenu.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on overlay
  overlay.addEventListener('click', toggleMenu);
  
  // Close menu when clicking a navigation link
  const navLinks = document.querySelectorAll('.navbar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggleMenu();
    });
  });
  
  // Close menu when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navigation.classList.contains('active')) {
      toggleMenu();
    }
  });
});
