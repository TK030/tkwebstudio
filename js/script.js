// TK Webstudio - Main JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submissions
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Show success message
            alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');

            // Reset form
            form.reset();
        });
    });
});

// Active navigation highlighting
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.card, .service-card, .portfolio-item');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Portfolio filter (if needed)
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Automatisch jaar bijwerken in footer
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typed-text", {
        strings: ["Websites", "Webshops", "Apps"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
});

// ===== DARK/LIGHT MODE TOGGLE WITH LOCALSTORAGE =====
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Check if toggle element exists
    if (!toggle) {
        console.error("Toggle element with id 'mode-toggle' not found!");
        return;
    }

    // Initialize theme on page load
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            // User has previously set a preference - use that
            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
                toggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                toggle.checked = false;
            }
        } else {
            // No saved preference - check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (prefersDark) {
                body.classList.add('dark-mode');
                toggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                toggle.checked = false;
            }
        }
    }

    // Toggle event listener
    toggle.addEventListener('change', function () {
        if (this.checked) {
            // Switch to dark mode and save preference
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode and save preference
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Listen for system theme changes (only if user hasn't set manual preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
                toggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                toggle.checked = false;
            }
        }
    });

    // Initialize theme
    initTheme();
});