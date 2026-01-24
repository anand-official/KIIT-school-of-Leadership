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

            const topLinks = document.querySelectorAll('nav.bottom-nav a.nav-item');
            const dropdownLinks = document.querySelectorAll('nav.bottom-nav .dropdown-item');
            const peopleToggle = document.querySelector('nav.bottom-nav .nav-item-dropdown > span.nav-item');

            function markActiveForHref(matchers) {
                topLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (matchers.includes(href)) a.classList.add('active');
                });
                dropdownLinks.forEach((a) => {
                    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
                    if (matchers.includes(href)) a.classList.add('active');
                });
            }

            const isHome = normalized === 'index.html' || normalized === 'home.html';
            const isAbout = ['about.html', 'about-vice-chancellor.html', 'about-pinaki-nandan.html'].includes(normalized);
            const isPeople = ['people-board-of-studies.html', 'people-regular-faculty.html', 'people-professors-of-practice.html'].includes(normalized);

            if (isHome) markActiveForHref(['index.html']);
            else if (isAbout) markActiveForHref(['about.html']);
            else if (isPeople && peopleToggle) peopleToggle.classList.add('active');
            else markActiveForHref([normalized]);
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
