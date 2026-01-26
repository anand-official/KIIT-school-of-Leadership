// Load header and footer from separate files
document.addEventListener('DOMContentLoaded', function() {
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
            const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
            const normalized = (!path || path === '/') ? 'index.html' : path;
            console.log('Current page:', normalized);

            const topLinks = document.querySelectorAll('nav.bottom-nav a.nav-item');
            const dropdownLinks = document.querySelectorAll('nav.bottom-nav .dropdown-item');
            const dropdownToggles = document.querySelectorAll('nav.bottom-nav .nav-item-dropdown > span.nav-item');
            console.log('Found dropdown toggles:', dropdownToggles.length);
            
            // Find dropdowns by their text content to avoid order issues
            let aboutToggle = null;
            let peopleToggle = null;
            dropdownToggles.forEach(toggle => {
                const text = toggle.textContent.trim().toLowerCase();
                console.log('Toggle text:', text);
                if (text.includes('about')) aboutToggle = toggle;
                if (text.includes('people')) peopleToggle = toggle;
            });

            const isHome = normalized === 'index.html' || normalized === 'home.html';
            const isAbout = ['about.html', 'about-founder.html', 'about-vice-chancellor.html', 'about-pinaki-nandan.html', 'about-ceo-kiit-tbi.html'].includes(normalized);
            const isPeople = ['people-board-of-studies.html', 'people-regular-faculty.html', 'people-professors-of-practice.html'].includes(normalized);
            console.log('isPeople:', isPeople, 'isAbout:', isAbout, 'peopleToggle found:', !!peopleToggle);

            if (isHome) {
                console.log('Marking Home as active');
                topLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (href === 'index.html') a.classList.add('active');
                });
            } else if (isPeople && peopleToggle) {
                console.log('Marking People as active');
                peopleToggle.classList.add('active');
                dropdownLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (href === normalized) a.classList.add('active');
                });
            } else if (isAbout && aboutToggle) {
                console.log('Marking About as active');
                aboutToggle.classList.add('active');
                dropdownLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (href === normalized) a.classList.add('active');
                });
            } else {
                console.log('Marking by href match:', normalized);
                topLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (href === normalized) a.classList.add('active');
                });
            }
        } catch (e) {
            console.warn('Nav active highlighting failed:', e);
        }
    }

    // Load header (with cache busting)
    fetch('includes/header.html?v=' + Date.now())
        .then(response => response.text())
        .then(html => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = html;
            document.body.insertBefore(headerContainer, document.body.firstChild);
            setActiveNav();
        })
        .catch(err => console.error('Error loading header:', err));
    
    // Load footer (with cache busting)
    fetch('includes/footer.html?v=' + Date.now())
        .then(response => response.text())
        .then(html => {
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = html;
            document.body.appendChild(footerContainer);
        })
        .catch(err => console.error('Error loading footer:', err));
});
