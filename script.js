document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    // Tab Switching Logic
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = btn.getAttribute('data-target');

            // Update Active Nav Button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Active Section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Smooth background scroll (optional, if we want to scroll to top of glass box)
            document.querySelector('.glass-container').scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Handle Hash on Load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetBtn = document.querySelector(`[data-target="${hash}"]`);
        if (targetBtn) targetBtn.click();
    }

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to elements
    const animateElements = document.querySelectorAll('.skill-box, .project-card, .info-item, .hero-title, .status-badge, .section-header');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
        // Stagger by adding dynamic delay based on index in viewport
        observer.observe(el);
    });
});
