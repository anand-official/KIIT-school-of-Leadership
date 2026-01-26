KSLD — Developer Handoff: CSS Variables, Components & Implementation Guide

Overview
- Use this as the single source of truth for developers building the KSLD site.
- Includes: CSS custom properties, spacing system, component specs, HTML patterns, and accessibility notes.

---

## CSS Custom Properties (Design Tokens)

Root variables (copy into :root selector):

```css
:root {
  /* Colors */
  --color-white: #FFFFFF;
  --color-off-white: #F9F9F9;
  --color-light-gray: #F5F5F5;
  --color-border: #E8E8E8;
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-text-light: #999999;
  --color-accent: #2D5F3F; /* KIIT Green */
  --color-accent-hover: #245033;
  --color-dark-bg: #1A1A1A;
  --color-dark-section: #2C2C2C;

  /* Typography */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Spacing Scale */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 40px;
  --space-3xl: 48px;
  --space-4xl: 60px;
  --space-5xl: 80px;
  --space-6xl: 100px;
  --space-7xl: 120px;

  /* Font Sizes */
  --font-h1: 52px;
  --font-h2: 40px;
  --font-h3: 20px;
  --font-body: 16px;
  --font-body-lg: 18px;
  --font-caption: 13px;
  --font-label: 14px;

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Line Heights */
  --lh-h1: 64px;
  --lh-h2: 48px;
  --lh-h3: 28px;
  --lh-body: 24px;
  --lh-body-lg: 28px;
  --lh-caption: 18px;

  /* Shadows */
  --shadow-sm: 0px 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0px 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0px 12px 32px rgba(0, 0, 0, 0.12);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;

  /* Container */
  --container-max: 1280px;
  --container-padding: var(--space-5xl);

  /* Breakpoints (use in media queries) */
  --bp-mobile: 375px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-wide: 1440px;
}
```

---

## Base Styles & Utilities

Normalize & apply globally:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text-primary);
  background-color: var(--color-white);
  line-height: var(--lh-body);
  font-weight: var(--weight-regular);
}

/* Container utility */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-lg);
  }
}
```

---

## Typography Component Styles

```css
/* Headings */
h1, .h1 {
  font-family: var(--font-serif);
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  line-height: var(--lh-h1);
  margin-bottom: var(--space-lg);
}

h2, .h2 {
  font-family: var(--font-serif);
  font-size: var(--font-h2);
  font-weight: var(--weight-semibold);
  line-height: var(--lh-h2);
  margin-bottom: var(--space-lg);
}

h3, .h3 {
  font-family: var(--font-sans);
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--lh-h3);
  margin-bottom: var(--space-md);
}

p {
  margin-bottom: var(--space-md);
}

.caption, .small {
  font-size: var(--font-caption);
  color: var(--color-text-secondary);
  line-height: var(--lh-caption);
}

/* Section header pattern */
.section-header {
  text-align: center;
  margin-bottom: var(--space-5xl);
}

.section-tag {
  display: inline-block;
  font-size: var(--font-label);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.section-title {
  font-family: var(--font-serif);
  font-size: var(--font-h2);
  margin-bottom: var(--space-lg);
}

.section-description {
  font-size: var(--font-body-lg);
  color: var(--color-text-secondary);
  max-width: 720px;
  margin: 0 auto;
}
```

---

## Button Component Styles

```css
/* Button reset */
button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

/* Button base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  line-height: 1;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
  min-height: 48px;
}

/* Primary button */
.btn-primary {
  background-color: var(--color-text-primary);
  color: var(--color-white);
  border: 2px solid var(--color-text-primary);
}

.btn-primary:hover {
  background-color: var(--color-white);
  color: var(--color-text-primary);
  border-color: var(--color-text-primary);
}

/* Secondary button */
.btn-secondary {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-text-primary);
}

.btn-secondary:hover {
  background-color: var(--color-light-gray);
  border-color: var(--color-accent);
}

/* Outlined button */
.btn-outline {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-accent);
}

.btn-outline:hover {
  background-color: var(--color-accent);
  color: var(--color-white);
}

/* Text link button */
.btn-text {
  background: none;
  border: none;
  padding: 0;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--weight-semibold);
}

.btn-text:hover {
  text-decoration: underline;
}

/* Large button variant */
.btn-large {
  padding: var(--space-lg) var(--space-3xl);
  font-size: var(--font-body-lg);
  min-height: 56px;
}

/* Icon in button */
.btn i {
  font-size: 0.9em;
}
```

---

## Card Component

```css
.card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card-title {
  font-family: var(--font-sans);
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-md);
}

.card-description {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  line-height: var(--lh-body);
}

/* No-border card variant */
.card-minimal {
  border: none;
  box-shadow: none;
  padding: 0;
}

.card-minimal:hover {
  background-color: var(--color-off-white);
  box-shadow: none;
  transform: none;
}
```

---

## Grid & Layout

```css
.grid {
  display: grid;
  gap: var(--space-xl);
  width: 100%;
}

/* 4-column grid */
.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* 3-column grid */
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* 2-column grid */
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

/* Responsive grids */
@media (max-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-4,
  .grid-3,
  .grid-2 {
    grid-template-columns: 1fr;
  }
}

/* Flex row with gap */
.flex-row {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.flex-row-spacer {
  justify-content: space-between;
}
```

---

## Section Styles

```css
section {
  padding: var(--space-6xl) 0;
}

section.section-light {
  background-color: var(--color-light-gray);
}

section.section-dark {
  background-color: var(--color-dark-bg);
  color: var(--color-white);
}

section.section-dark h1,
section.section-dark h2,
section.section-dark h3 {
  color: var(--color-white);
}
```

---

## Navigation Bar

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 var(--space-lg);
}

.navbar-brand {
  font-family: var(--font-serif);
  font-size: var(--font-h3);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  gap: var(--space-sm);
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--space-3xl);
  align-items: center;
}

.navbar-link {
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: var(--weight-semibold);
  transition: color var(--transition-base);
}

.navbar-link:hover {
  color: var(--color-accent);
}

.navbar-cta {
  padding: var(--space-sm) var(--space-lg);
  background-color: var(--color-text-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
}

.navbar-cta:hover {
  background-color: var(--color-accent);
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: var(--color-text-primary);
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .navbar-menu {
    display: none;
  }
  
  .navbar-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    padding: var(--space-lg);
    gap: var(--space-lg);
  }
}
```

---

## Hero Section

```css
.hero {
  position: relative;
  padding: var(--space-6xl) 0;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero-title {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-lg);
  line-height: var(--lh-h1);
}

.hero-subtitle {
  font-size: var(--font-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.hero-description {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3xl);
  max-width: 640px;
  line-height: var(--lh-body);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .hero {
    min-height: 400px;
    padding: var(--space-5xl) 0;
  }
  
  .hero-background {
    display: none;
  }
  
  .hero-title {
    font-size: 36px;
    line-height: 44px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}
```

---

## Form Styles

```css
.form-group {
  margin-bottom: var(--space-lg);
}

label {
  display: block;
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-sm);
  color: var(--color-text-primary);
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea,
select {
  width: 100%;
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: var(--font-body);
  transition: border-color var(--transition-base);
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(45, 95, 63, 0.1);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.form-helper {
  display: block;
  font-size: var(--font-caption);
  color: var(--color-text-secondary);
  margin-top: var(--space-xs);
}

.form-error {
  color: #d32f2f;
  font-size: var(--font-caption);
  margin-top: var(--space-xs);
}

input:invalid:focus {
  border-color: #d32f2f;
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
}
```

---

## Footer

```css
.footer {
  background-color: var(--color-dark-bg);
  color: var(--color-white);
  padding: var(--space-6xl) 0 var(--space-3xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-5xl);
  margin-bottom: var(--space-5xl);
}

.footer-section h4 {
  font-size: var(--font-label);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-lg);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-links a {
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-body);
  transition: color var(--transition-base);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-social {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-white);
  transition: color var(--transition-base);
}

.social-link:hover {
  color: var(--color-accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copyright {
  font-size: var(--font-caption);
  color: rgba(255, 255, 255, 0.6);
}

.footer-legal {
  display: flex;
  gap: var(--space-lg);
  font-size: var(--font-caption);
}

.footer-separator {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }
}
```

---

## Accessibility & Utility Classes

```css
/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-accent);
  color: var(--color-white);
  padding: var(--space-sm) var(--space-lg);
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Focus visible for keyboard navigation */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## HTML Component Examples

### Hero Section
```html
<section class="hero" id="home">
  <div class="hero-background" role="img" aria-label="Campus or innovation imagery"></div>
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Where Leaders and Innovators Are Built.</h1>
      <p class="hero-subtitle">Leadership isn't taught — it's lived.</p>
      <p class="hero-description">A future-focused school for creators, changemakers, and founders — powered by multidisciplinary learning and a live innovation ecosystem.</p>
      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary">Apply to MBA-IEV</a>
        <a href="#programs" class="btn btn-secondary">Explore Programs</a>
      </div>
    </div>
  </div>
</section>
```

### Program Card
```html
<article class="card program-card">
  <h3 class="card-title">MBA in Innovation & Entrepreneurship</h3>
  <p class="card-description">Build your startup while earning your MBA. Real venture building, not case studies.</p>
  <ul role="list">
    <li>Launch with seed funding from KIIT-TBI</li>
    <li>2-year immersive cohort experience</li>
    <li>Operator faculty from unicorns</li>
  </ul>
  <a href="#" class="btn btn-text">Learn More <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</article>
```

### Form Example
```html
<form class="contact-form" method="POST" action="/submit">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="name@example.com" required aria-describedby="email-helper">
    <span class="form-helper" id="email-helper">We'll only use this to contact you about admissions.</span>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## Implementation Notes

1. **Mobile-First Approach:** All base styles are mobile. Use `@media (min-width: ...)` for larger screens.
2. **Semantic HTML:** Use proper heading hierarchy (h1 → h2 → h3), list semantics, and form labels.
3. **Accessibility:** Ensure color contrast ratios meet WCAG AA (4.5:1 for text).
4. **Performance:** Lazy-load images, minify CSS, use CSS variables for maintainability.
5. **Testing:** Test on real devices, keyboard navigation, screen readers, and with reduced-motion settings.
