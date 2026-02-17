// Load header and footer from separate files (Clean URL Version)
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu initialization function
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (!mobileMenuToggle || !mobileMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }

        console.log('Initializing mobile menu...');

        const syncMenuState = (isOpen) => {
            mobileMenu.classList.toggle('active', isOpen);
            mobileMenuToggle.classList.toggle('active', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.classList.toggle('menu-open', isOpen);

            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        };

        // Click handler for toggle button
        mobileMenuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = !mobileMenu.classList.contains('active');
            console.log('Menu toggle clicked, opening:', isOpen);
            syncMenuState(isOpen);
        });

        // Close when clicking outside
        document.addEventListener('click', function (e) {
            if (mobileMenu.classList.contains('active') &&
                !mobileMenu.contains(e.target) &&
                !mobileMenuToggle.contains(e.target)) {
                syncMenuState(false);
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                syncMenuState(false);
            }
        });

        // Close when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => syncMenuState(false));
        });

        console.log('Mobile menu initialized successfully');
    }

    // Remove any pre-existing hardcoded header/footer to avoid duplicates
    try {
        const selectorsToRemove = [
            '.top-bar',
            '.main-header',
            'nav.bottom-nav',
            'header.site-header',
            'footer.footer-dark',
            'footer.site-footer',
            'footer'
        ];
        document.querySelectorAll(selectorsToRemove.join(', ')).forEach(el => el.remove());
    } catch (e) {
        console.warn('Header/Footer cleanup warning:', e);
    }

    function setActiveNav() {
        try {
            // Get current path, ensuring it ends with / for consistency with new links
            let currentPath = location.pathname.toLowerCase();
            if (currentPath.length > 1 && !currentPath.endsWith('/')) {
                currentPath += '/';
            }
            if (currentPath === '/index.html') currentPath = '/';

            console.log('Current page path:', currentPath);

            const allLinks = document.querySelectorAll('nav.bottom-nav a, nav.mobile-nav a');
            const dropdownToggles = document.querySelectorAll('nav.bottom-nav .nav-item-dropdown > span.nav-item');

            // Mark direct links as active
            allLinks.forEach(link => {
                const href = link.getAttribute('href').toLowerCase();
                if (href === currentPath) {
                    link.classList.add('active');
                }
            });

            // Handle Dropdown Parents (About & People)
            // Logic: Is the current path part of the 'About' group or 'People' group?

            const aboutPaths = [
                '/about/',
                '/about-founder/',
                '/about-vice-chancellor/',
                '/about-ceo-kiit-tbi/',
                '/about-pinaki-nandan/'
            ];

            const peoplePaths = [
                '/people-board-of-studies/',
                '/people-regular-faculty/',
                '/people-professors-of-practice/'
            ];

            const isAboutActive = aboutPaths.includes(currentPath);
            const isPeopleActive = peoplePaths.includes(currentPath);

            dropdownToggles.forEach(toggle => {
                const text = toggle.textContent.trim().toLowerCase();
                if (text.includes('about') && isAboutActive) {
                    toggle.classList.add('active');
                }
                if (text.includes('people') && isPeopleActive) {
                    toggle.classList.add('active');
                }
            });

        } catch (e) {
            console.warn('Nav active highlighting failed:', e);
        }
    }

    // Determine the base path dynamically
    // This works both locally and on GitHub Pages (even with custom domains)
    function getBasePath() {
        const path = window.location.pathname;
        // If we're in a subdirectory (e.g., /about/), go up the appropriate number of levels
        const depth = (path.match(/\//g) || []).length - 1;
        return depth > 0 ? '../'.repeat(depth) : './';
    }

    const basePath = getBasePath();

    // Load header (with cache busting) - Dynamic path resolution
    fetch(basePath + 'includes/header.html?v=2.1')
        .then(response => response.text())
        .then(html => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = html;
            document.body.insertBefore(headerContainer, document.body.firstChild);
            setActiveNav();

            // Initialize mobile menu after header is loaded
            initMobileMenu();

            // Dispatch event for other scripts
            document.dispatchEvent(new CustomEvent('headerLoaded'));
        })
        .catch(err => console.error('Error loading header:', err));

    // Load footer (with cache busting) - Dynamic path resolution
    fetch(basePath + 'includes/footer.html?v=2.1')
        .then(response => response.text())
        .then(html => {
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = html;
            document.body.appendChild(footerContainer);
        })
        .catch(err => console.error('Error loading footer:', err));
});
