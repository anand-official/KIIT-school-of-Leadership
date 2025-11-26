// ================================================================
// KIIT School of Leadership - Main JavaScript
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ================================================================
    // Navigation
    // ================================================================
    
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const navLinks = document.querySelectorAll('.navbar-link');
    
    // Navbar scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', navbarMenu.classList.contains('active'));
            
            // Animate toggle icon
            const spans = this.querySelectorAll('span');
            if (navbarMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
                link.style.color = '#1F3D1F';
            } else {
                link.style.color = '#000000';
            }
        });
    });
    
    // ================================================================
    // Back to Top Button
    // ================================================================
    
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ================================================================
    // Intersection Observer for Scroll Animations
    // ================================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and elements
    const animatedElements = document.querySelectorAll(
        '.stat-card, .program-card, .why-card, .person-card, .success-card, .ecosystem-card, .story-card'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
    
    // ================================================================
    // Counter Animation for Stats
    // ================================================================
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const text = stat.textContent.trim();
                    const numberMatch = text.match(/[\d,]+/);
                    
                    if (numberMatch) {
                        const targetNumber = parseInt(numberMatch[0].replace(/,/g, ''));
                        const prefix = text.split(numberMatch[0])[0];
                        const suffix = text.split(numberMatch[0])[1];
                        
                        let currentNumber = 0;
                        const duration = 2000;
                        const increment = targetNumber / (duration / 16);
                        
                        const timer = setInterval(() => {
                            currentNumber += increment;
                            if (currentNumber >= targetNumber) {
                                stat.textContent = prefix + formatNumber(targetNumber) + suffix;
                                clearInterval(timer);
                            } else {
                                stat.textContent = prefix + formatNumber(Math.floor(currentNumber)) + suffix;
                            }
                        }, 16);
                    }
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Helper function to format numbers with commas
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Observe stats sections
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ================================================================
    // Lazy Loading for Images
    // ================================================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ================================================================
    // Parallax Effect for Hero Section
    // ================================================================
    
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');
    
    if (hero && heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ================================================================
    // Card Hover Effects Enhancement
    // ================================================================
    
    const cards = document.querySelectorAll('.program-card, .why-card, .person-card, .story-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // ================================================================
    // Performance Optimization - Debounce
    // ================================================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ================================================================
    // Accessibility Enhancements
    // ================================================================
    
    // Keyboard navigation for interactive elements
    document.querySelectorAll('.btn, .navbar-link, .social-link').forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        element.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ================================================================
    // External Links - Open in New Tab
    // ================================================================
    
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
            e.target.setAttribute('target', '_blank');
            e.target.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ================================================================
    // Dynamic Copyright Year
    // ================================================================
    
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2024', currentYear);
    }
    
    // ================================================================
    // Page Load Animation
    // ================================================================
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // ================================================================
    // Console Message
    // ================================================================
    
    console.log('%c KIIT School of Leadership ', 'background: #1F3D1F; color: white; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;');
    console.log('%c Where Future Leaders and Founders Are Built ', 'color: #000000; font-size: 14px; padding: 5px;');
    
    // ================================================================
    // Initialize All
    // ================================================================
    
    console.log('✓ All scripts initialized successfully');
});

// ================================================================
// Service Worker Registration (Optional - for PWA)
// ================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js');
    });
}
