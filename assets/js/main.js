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
    
    initHeroSlider();
    initNavigation();
    initBackToTop();
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initScrollProgress();
});

// ================================================================
// Hero Slider
// ================================================================

function initHeroSlider() {
    const slides = document.querySelectorAll('.mini-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (!slides.length || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance every 6 seconds
    setInterval(nextSlide, 6000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

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
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ================================================================
// Back to Top Button
// ================================================================

function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
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
// Scroll Animations with Intersection Observer
// ================================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards with stagger effect
    const cards = document.querySelectorAll(
        '.stat-card, .card, .why-card, .person-card, .story-card'
    );
    
    cards.forEach((card, index) => {
        card.classList.add('stagger-item');
        fadeObserver.observe(card);
    });
    
    // Observe section headers
    const sectionTitles = document.querySelectorAll('.section-title, .section-subtitle');
    sectionTitles.forEach(title => {
        title.classList.add('fade-in');
        fadeObserver.observe(title);
    });
}

// ================================================================
// Parallax Effect for Hero
// ================================================================

function initParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
}

// ================================================================
// Card Hover Effects Enhancement
// ================================================================

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ================================================================
// Smooth Button Ripple Effect
// ================================================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});
