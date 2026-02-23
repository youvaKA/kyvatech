// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero title reveal
    gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.title-line', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power4.out'
    });

    gsap.from('.hero-description', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out'
    });

    gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.1,
        ease: 'power3.out'
    });

    // Floating cards animation
    gsap.from('.floating-card', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.15,
        delay: 1.3,
        ease: 'back.out(1.7)'
    });

    // Floating animation loop for cards
    document.querySelectorAll('.floating-card').forEach((card, i) => {
        gsap.to(card, {
            y: `random(-20, 20)`,
            x: `random(-10, 10)`,
            rotation: `random(-5, 5)`,
            duration: `random(3, 5)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.5
        });
    });

    // Metric counter animation
    gsap.from('.metric-item', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        delay: 1.5,
        ease: 'power3.out'
    });

    // Counter animation for metrics
    document.querySelectorAll('.metric-value').forEach(el => {
        const target = parseInt(el.dataset.count);
        gsap.to(el, {
            textContent: target,
            duration: 2,
            delay: 1.8,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function() {
                el.textContent = Math.round(parseFloat(el.textContent));
            }
        });
    });

    // Bento grid scroll animations
    gsap.utils.toArray('.bento-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Section header animations
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Partners scroll animation
    gsap.from('.partner-tile', {
        scrollTrigger: {
            trigger: '.partner-tile',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
    });

    // Cursor-following glow effect on bento items
    document.querySelectorAll('.bento-item').forEach(item => {
        const glow = item.querySelector('.bento-glow');
        if (!glow) return;

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.opacity = '1';
            glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.15), transparent 40%)`;
        });

        item.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    });

    // Parallax on hero visual elements
    document.querySelector('.hero-section')?.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 2;
        const y = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to('.floating-card.card-1', { x: x * 30, y: y * 20, duration: 0.8, ease: 'power2.out' });
        gsap.to('.floating-card.card-2', { x: x * -20, y: y * 25, duration: 0.8, ease: 'power2.out' });
        gsap.to('.floating-card.card-3', { x: x * 25, y: y * -15, duration: 0.8, ease: 'power2.out' });
        gsap.to('.floating-card.card-4', { x: x * -15, y: y * -20, duration: 0.8, ease: 'power2.out' });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
