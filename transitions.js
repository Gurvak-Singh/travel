document.addEventListener('DOMContentLoaded', function() {
  // Add transition container to the body
  const transitionElement = document.createElement('div');
  transitionElement.className = 'page-transition';
  document.body.appendChild(transitionElement);
  
  // Function to handle the page transition
  function pageTransition(event, url) {
    event.preventDefault();
    
    // Store the current scroll position
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition);
    
    // Trigger the transition animation
    document.body.classList.add('transition-active');
    
    // Navigate to the new page after animation completes
    setTimeout(function() {
      window.location.href = url;
    }, 500); // Match this timing with the CSS animation duration
  }
  
  // Add click event listeners to all internal navigation links
  const internalLinks = document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="destinations"], a[href^="packages"], a[href^="blog"], a[href^="contact"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Get the href value
      const href = this.getAttribute('href');
      
      // Skip hash links (same-page navigation)
      if (href.startsWith('#')) {
        return;
      }
      
      // Handle the page transition
      pageTransition(event, href);
    });
  });
  
  // Check if we need to restore scroll position
  if (localStorage.getItem('scrollPosition')) {
    // Wait for page to fully load
    window.addEventListener('load', function() {
      // Fade in the page
      document.body.classList.add('page-loaded');
      
      // Scroll to the saved position if we're coming from another page
      if (document.referrer) {
        const scrollPosition = parseInt(localStorage.getItem('scrollPosition'));
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition');
      }
    });
  } else {
    // Fade in the page
    document.body.classList.add('page-loaded');
  }
});
