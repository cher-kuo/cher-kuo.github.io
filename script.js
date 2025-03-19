// Utility function to show error messages
const showError = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.marginBottom = '10px';
    return errorDiv;
};

// Utility function to remove error messages
const removeErrors = () => {
    document.querySelectorAll('.error-message').forEach(err => err.remove());
};

// Validate form data
const validateForm = (formData) => {
    const errors = [];
    
    if (!formData.name || formData.name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/.test(formData.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!formData.message || formData.message.length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
};

let csrfToken = null;

document.addEventListener('DOMContentLoaded', async function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Get CSRF token
    try {
        const response = await fetch('http://localhost:3000/api/csrf-token');
        const data = await response.json();
        csrfToken = data.token;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }

    // Form submission handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            removeErrors();
            
            const formData = {
                name: form.querySelector('input[placeholder="Your Name"]').value.trim(),
                email: form.querySelector('input[placeholder="Email Address"]').value.trim(),
                phone: form.querySelector('input[placeholder="Phone Number"]').value.trim(),
                message: form.querySelector('textarea').value.trim()
            };

            // Client-side validation
            const errors = validateForm(formData);
            if (errors.length > 0) {
                errors.forEach(error => {
                    form.insertBefore(showError(error), form.firstChild);
                });
                return;
            }

            try {
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (response.ok) {
                    // Create success message
                    const successDiv = document.createElement('div');
                    successDiv.className = 'success-message';
                    successDiv.textContent = 'Thank you for your inquiry! We will contact you shortly.';
                    successDiv.style.color = 'green';
                    successDiv.style.marginBottom = '10px';
                    form.insertBefore(successDiv, form.firstChild);
                    
                    form.reset();
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                } else {
                    throw new Error(data.message || 'Error submitting form');
                }
            } catch (error) {
                console.error('Error:', error);
                form.insertBefore(
                    showError('There was an error submitting the form. Please try again later.'),
                    form.firstChild
                );
            } finally {
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = false;
                submitButton.textContent = 'Request Appointment';
            }
        });
    }

    // Header scroll effect
    let header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'white';
        }
    });
});
