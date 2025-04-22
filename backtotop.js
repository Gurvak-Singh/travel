document.addEventListener('DOMContentLoaded', function() {
  // Create back to top button element
  const backToTopBtn = document.createElement('button');
  backToTopBtn.classList.add('back-to-top');
  backToTopBtn.innerHTML = '&uarr;';
  document.body.appendChild(backToTopBtn);
  
  // Show button when user scrolls down 300px from the top
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when button is clicked
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
