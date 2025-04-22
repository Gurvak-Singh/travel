// main.js - Adds interactivity for TravelAgency website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal for Book Now button
    const bookBtn = document.querySelector('.cta-book');
    const modal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    if (bookBtn && modal && closeModal) {
        bookBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Simple form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let valid = true;
            this.querySelectorAll('input, textarea').forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('input-error');
                    valid = false;
                } else {
                    input.classList.remove('input-error');
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                obs.unobserve(img);
            }
        });
    }, { rootMargin: '0px 0px 200px 0px', threshold: 0 });
    lazyImages.forEach(img => observer.observe(img));
});
