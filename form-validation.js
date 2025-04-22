document.addEventListener('DOMContentLoaded', function() {
  // Get all forms that need validation
  const forms = document.querySelectorAll('.needs-validation');
  
  // Function to create and append error message
  function createErrorMessage(input, message) {
    // Check if error message already exists
    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
      input.nextElementSibling.textContent = message;
      return;
    }
    
    // Create new error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // Insert after input
    input.parentNode.insertBefore(errorElement, input.nextElementSibling);
  }
  
  // Remove error message when input changes
  document.addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      const errorMessage = e.target.nextElementSibling;
      if (errorMessage && errorMessage.classList.contains('error-message')) {
        e.target.classList.remove('is-invalid');
        errorMessage.remove();
      }
    }
  });
  
  // Loop over all forms and prevent submission if validation fails
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      // Clear all existing error messages
      form.querySelectorAll('.error-message').forEach(msg => msg.remove());
      
      // Flag to track validation
      let isValid = true;
      
      // Check required fields
      form.querySelectorAll('[required]').forEach(function(input) {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          createErrorMessage(input, 'This field is required');
          isValid = false;
        }
      });
      
      // Validate email fields
      form.querySelectorAll('input[type="email"]').forEach(function(input) {
        if (input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          input.classList.add('is-invalid');
          createErrorMessage(input, 'Please enter a valid email address');
          isValid = false;
        }
      });
      
      // Validate phone fields
      form.querySelectorAll('input[type="tel"]').forEach(function(input) {
        if (input.value.trim() && !/^[0-9+\-\s()]{7,20}$/.test(input.value)) {
          input.classList.add('is-invalid');
          createErrorMessage(input, 'Please enter a valid phone number');
          isValid = false;
        }
      });
      
      // Check if form is valid
      if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
        
        // Scroll to first error
        const firstError = form.querySelector('.is-invalid');
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // Show success message if needed
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Your message has been sent successfully!';
        form.appendChild(successMessage);
        
        // Clear form
        form.reset();
        
        // Prevent actual submission for demo (remove this in production)
        event.preventDefault();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  });
});
