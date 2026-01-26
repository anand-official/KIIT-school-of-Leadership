// ================================================================
// KIIT School of Leadership - Main JavaScript (Enhanced Premium)
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Remove loading class to enable transitions
    document.body.classList.remove('loading');
    
    // Handle Preloader
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Fallback for preloader
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000);
    
    initNavigation();
    initSmoothScroll();
    initScrollProgress();
    initHeroSlider();
    initHomeHeroSlides();
    initLeaderCarousel(); // Leadership messages auto-carousel
    initAnimationsOnScroll(); // Scroll animations with Intersection Observer
    initParallaxEffects(); // Parallax backgrounds
    initCounterAnimations(); // Animated counters
});

// ================================================================
// Scroll Progress Bar
// ================================================================

function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }
}

// ================================================================
// Navigation
// ================================================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Navbar scroll effect (guard when navbar is not present on a page)
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// ================================================================
// Smooth Scroll for Anchor Links
// ================================================================

function initSmoothScroll() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#apply' && href !== '#brochure' && href !== '#visit') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.offsetTop - navHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ================================================================
// Hero Slider (Homepage) - Enhanced with Progress Indicators
// ================================================================

function initHeroSlider() {
    const slider = document.querySelector('.mini-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.mini-slide'));
    const prev = slider.querySelector('.slider-prev');
    const next = slider.querySelector('.slider-next');
    const progressDots = slider.querySelectorAll('.slider-progress-dot');
    const progressBar = slider.querySelector('.slider-progress-bar');
    
    if (!slides.length) return;

    let current = slides.findIndex(slide => slide.classList.contains('active'));
    current = current >= 0 ? current : 0;

    const INTERVAL = 6000; // 6 seconds per slide
    let timer = null;

    // Update progress dots
    const updateDots = () => {
        progressDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    };

    // Reset and restart progress bar animation
    const resetProgressBar = () => {
        if (!progressBar) return;
        progressBar.classList.remove('animating');
        void progressBar.offsetWidth; // Force reflow
        progressBar.classList.add('animating');
    };

    const show = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        updateDots();
        resetProgressBar();
    };

    const goTo = (index, userInitiated = false) => {
        current = (index + slides.length) % slides.length;
        show(current);
        if (userInitiated) restart();
    };

    const start = () => {
        stop();
        resetProgressBar();
        timer = setInterval(() => goTo(current + 1), INTERVAL);
    };

    const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
        if (progressBar) progressBar.classList.remove('animating');
    };

    const restart = () => {
        stop();
        start();
    };

    // Navigation button events
    prev?.addEventListener('click', () => goTo(current - 1, true));
    next?.addEventListener('click', () => goTo(current + 1, true));

    // Progress dot click events
    progressDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goTo(index, true));
    });

    // Touch/swipe support
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const threshold = 50;
        if (deltaX > threshold) goTo(current - 1, true);
        if (deltaX < -threshold) goTo(current + 1, true);
    }, { passive: true });

    // Pause on hover, resume on leave
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    // Keyboard navigation when focused
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(current - 1, true);
        if (e.key === 'ArrowRight') goTo(current + 1, true);
    });

    // Initialize
    show(current);
    start();
}

// ================================================================
// Home Hero Background Slider (simple fade)
// ================================================================

function initHomeHeroSlides() {
    const slides = Array.from(document.querySelectorAll('.hero-slides .hero-slide'));
    if (!slides.length) return;

    let current = slides.findIndex(slide => slide.classList.contains('active'));
    current = current >= 0 ? current : 0;

    const INTERVAL = 6000;

    const show = (index) => {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    };

    show(current);

    setInterval(() => {
        current = (current + 1) % slides.length;
        show(current);
    }, INTERVAL);
}

// ================================================================
// Leadership Messages Auto-Carousel
// ================================================================

function initLeaderCarousel() {
    const carousel = document.querySelector('.leader-carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.leader-slide'));
    const prevBtn = carousel.querySelector('.leader-btn[data-dir="prev"]');
    const nextBtn = carousel.querySelector('.leader-btn[data-dir="next"]');
    const dotsContainer = document.querySelector('.leader-dots');
    
    if (!slides.length) return;

    let current = slides.findIndex(slide => slide.classList.contains('active'));
    current = current >= 0 ? current : 0;

    const INTERVAL = 6000; // 6 seconds per slide
    let timer = null;
    let progressBar = null;

    // Create progress bar for auto-advance indicator
    if (!carousel.querySelector('.leader-progress')) {
        progressBar = document.createElement('div');
        progressBar.className = 'leader-progress';
        carousel.appendChild(progressBar);
    } else {
        progressBar = carousel.querySelector('.leader-progress');
    }

    // Create navigation dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.className = 'leader-dot' + (idx === current ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
            dot.addEventListener('click', () => goTo(idx, true));
            dotsContainer.appendChild(dot);
        });
    }

    const updateDots = () => {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.leader-dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    };

    const show = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            // Add animation class for smooth transition
            if (i === index) {
                slide.style.animation = 'slideIn 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            }
        });
        updateDots();
        resetProgress();
    };

    const goTo = (index, userInitiated = false) => {
        current = (index + slides.length) % slides.length;
        show(current);
        if (userInitiated) restart();
    };

    const resetProgress = () => {
        if (!progressBar) return;
        progressBar.classList.remove('animating');
        void progressBar.offsetWidth; // Trigger reflow
        progressBar.classList.add('animating');
    };

    const start = () => {
        stop();
        resetProgress();
        timer = setInterval(() => goTo(current + 1), INTERVAL);
    };

    const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
        if (progressBar) progressBar.classList.remove('animating');
    };

    const restart = () => {
        stop();
        start();
    };

    // Navigation buttons
    prevBtn?.addEventListener('click', () => goTo(current - 1, true));
    nextBtn?.addEventListener('click', () => goTo(current + 1, true));

    // Pause on hover
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    // Touch/swipe support
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const threshold = 50;
        if (deltaX > threshold) goTo(current - 1, true);
        if (deltaX < -threshold) goTo(current + 1, true);
    }, { passive: true });

    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(current - 1, true);
        if (e.key === 'ArrowRight') goTo(current + 1, true);
    });

    // Initialize
    show(current);
    start();
}

// ================================================================
// Enhanced Scroll Animations with Intersection Observer
// ================================================================

function initAnimationsOnScroll() {
    // Skip animations on mobile for better performance
    if (window.innerWidth <= 480) {
        return;
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smoother animation
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
                animateObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate - more specific selectors
    const animatedElements = document.querySelectorAll(`
        .programs-grid .card,
        .story-card,
        .partner-card,
        .campus-stat-card,
        .value-card,
        .mini-person-card,
        .feature-card,
        .feature-grid > div
    `);

    animatedElements.forEach((el, index) => {
        // Don't add class if already visible in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.add('animate-on-scroll');
            animateObserver.observe(el);
        }
    });
}

// ================================================================
// Parallax Effects
// ================================================================

function initParallaxEffects() {
    // Disable on mobile for performance
    if (window.innerWidth <= 768) {
        return;
    }
    
    const parallaxElements = document.querySelectorAll('.campus-strip, .home-hero');
    
    if (!parallaxElements.length) return;

    let ticking = false;

    const updateParallax = () => {
        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const rate = 0.3;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (rect.top - window.innerHeight) * rate;
                el.style.backgroundPositionY = `${yPos}px`;
            }
        });
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// ================================================================
// Animated Counter Effect
// ================================================================

function initCounterAnimations() {
    // Skip on mobile for performance
    if (window.innerWidth <= 480) {
        return;
    }
    
    const counterElements = document.querySelectorAll('.campus-stat-card .stat-number');
    
    if (!counterElements.length) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const animateCounter = (element) => {
        const text = element.textContent || '';
        const match = text.match(/^([\d,]+)(\+?)$/);
        
        if (!match) return;
        
        const target = parseInt(match[1].replace(/,/g, ''), 10);
        const suffix = match[2] || '';
        const duration = 2000;
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out-cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            
            element.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString() + suffix;
            }
        };
        
        requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counterElements.forEach(el => counterObserver.observe(el));
}