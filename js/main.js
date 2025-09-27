// TK Webstudio - Main JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavLinks = document.querySelector('.nav-links');

    if (mobileToggle && mobileNavLinks) {
        mobileToggle.addEventListener('click', function () {
            mobileNavLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
        });
    });

    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.endsWith(currentPage) || (currentPage === '' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .portfolio-item, .service-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Header background change on scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});