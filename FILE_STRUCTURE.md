# Mokal Builder Website - Folder Structure & Documentation

## 📁 Complete Project Structure

```
mokal-builder/
├── public/                          # All public-facing assets
│   ├── html/                        # HTML pages
│   │   ├── index.html              # Homepage
│   │   ├── about.html              # About Us page
│   │   ├── services.html           # Services page
│   │   ├── projects.html           # Project Gallery
│   │   ├── project-single.html     # Individual Case Study
│   │   ├── estimate.html           # Quote Estimator
│   │   ├── contact.html            # Contact Page
│   │   ├── client.html             # Client Portal (optional)
│   │   ├── faq.html                # FAQ Page
│   │   └── team.html               # Team Page
│   │
│   ├── css/                        # Stylesheets
│   │   └── style.css               # Main stylesheet (5000+ lines)
│   │       ├── CSS Variables (Colors, Typography, Spacing, etc.)
│   │       ├── Global Styles (Reset, Typography, Forms)
│   │       ├── Components (Buttons, Cards, Modals)
│   │       ├── Sections (Hero, Trust Bar, Services, etc.)
│   │       ├── Responsive Design (Media Queries)
│   │       ├── Animations & Transitions
│   │       └── Utility Classes
│   │
│   ├── js/                         # JavaScript modules
│   │   ├── main.js                 # Global functionality
│   │   │   ├── Navbar toggle & navigation
│   │   │   ├── Smooth scrolling
│   │   │   ├── Image slider (auto-rotate)
│   │   │   ├── Before/After slider
│   │   │   ├── Modal functionality
│   │   │   ├── Scroll animations
│   │   │   ├── Counter animations
│   │   │   └── WhatsApp integration
│   │   │
│   │   ├── estimator.js            # Quote calculator
│   │   │   ├── EstimatorCalculator class
│   │   │   ├── AdvancedEstimator class
│   │   │   ├── QuickCalculator class
│   │   │   └── Price calculation logic
│   │   │
│   │   └── form-validation.js      # Form handling
│   │       ├── FormValidator class
│   │       ├── ContactFormValidator
│   │       ├── LeadFormValidator
│   │       ├── QuoteFormValidator
│   │       ├── MultiStepFormValidator
│   │       └── Sanitization & validation
│   │
│   ├── components/                 # Reusable HTML snippets
│   │   ├── navbar.html             # Navigation component
│   │   ├── footer.html             # Footer component
│   │   └── testimonial-card.html   # Testimonial card
│   │
│   ├── images/                     # Image assets
│   │   ├── hero/                   # Hero section images (16:9)
│   │   │   ├── project-1.jpg
│   │   │   ├── project-2.jpg
│   │   │   ├── project-3.jpg
│   │   │   ├── project-4.jpg
│   │   │   └── project-5.jpg
│   │   │
│   │   ├── projects/               # Project thumbnails & sliders
│   │   │   ├── residential/
│   │   │   ├── commercial/
│   │   │   ├── before-after/       # Before/After pairs
│   │   │   └── gallery/
│   │   │
│   │   ├── icons/                  # SVG or PNG icons
│   │   │   ├── residential.svg
│   │   │   ├── commercial.svg
│   │   │   ├── security.svg
│   │   │   ├── quality.svg
│   │   │   └── support.svg
│   │   │
│   │   ├── team/                   # Team member photos
│   │   │   ├── founder.jpg
│   │   │   ├── cto.jpg
│   │   │   └── team-members.jpg
│   │   │
│   │   └── logos/                  # Brand logos
│   │       ├── logo.png
│   │       ├── logo-white.png
│   │       ├── favicon.ico
│   │       └── logo-mark.png
│   │
│   ├── assets/                     # Additional assets
│   │   ├── fonts/                  # Custom fonts
│   │   │   ├── poppins.woff2
│   │   │   ├── inter.woff2
│   │   │   └── lato.woff2
│   │   │
│   │   └── pdfs/                   # Downloadable files
│   │       ├── brochure.pdf
│   │       ├── pricing-sheet.pdf
│   │       └── project-portfolio.pdf
│   │
│   ├── .htaccess                   # Apache server config
│   ├── robots.txt                  # SEO: robots configuration
│   └── sitemap.xml                 # SEO: sitemap
│
├── server.js                       # Express.js server
├── package.json                    # npm dependencies
├── .env.example                    # Environment variables template
├── README.md                       # Project documentation
└── FILE_STRUCTURE.md               # This file

```

## 🎯 File Purpose Guide

### HTML Pages

| File | Purpose | Key Sections |
|------|---------|--------------|
| `index.html` | Homepage | Hero, Trust Bar, Services, Featured Projects, Testimonials, CTA |
| `about.html` | Company story | Mission, Team, Timeline, Achievements, Culture |
| `services.html` | Service details | Residential, Commercial, Process, Pricing, FAQs |
| `projects.html` | Project gallery | Filterable gallery, Grid layout, Project cards |
| `project-single.html` | Case study | Hero image, Before/After, Stats, Client testimonial |
| `estimate.html` | Quote calculator | Estimator form, Real-time calculation, Result display |
| `contact.html` | Contact & leads | Contact form, Map, WhatsApp button, Hours |
| `client.html` | Portal login | Authentication, Dashboard (if implemented) |
| `faq.html` | FAQ section | Accordion, Common questions |
| `team.html` | Team bios | Team member cards, Roles, Social links |

### CSS Stylesheet

**File:** `public/css/style.css` (5000+ lines)

**Sections:**
1. **CSS Variables** - Design tokens (colors, typography, spacing, shadows)
2. **Global Styles** - Reset, base typography, links
3. **Typography** - H1-H6, paragraphs, text utilities
4. **Buttons** - Primary, secondary, ghost, WhatsApp variants
5. **Forms** - Input fields, validation states, error messages
6. **Layout** - Container, grid, flexbox utilities
7. **Sections** - Hero, trust bar, services, projects, testimonials
8. **Cards** - Reusable card styling
9. **Navbar** - Sticky header, navigation, mobile toggle
10. **Hero** - Full-width banner, overlay, CTA
11. **Trust Bar** - Stats display
12. **Services Grid** - Service cards
13. **Project Gallery** - Project cards, hover effects
14. **Before/After Slider** - Interactive comparison
15. **Testimonials** - Testimonial cards, carousel
16. **Estimator Form** - Styled calculator form
17. **Contact Form** - Multi-field form styling
18. **Footer** - Dark footer with sections
19. **Modals** - Dialog styling
20. **Animations** - Keyframes, utility classes
21. **Responsive Design** - Tablet & mobile breakpoints
22. **Accessibility** - WCAG AA compliance, focus states
23. **Utility Classes** - Text, color, spacing, visibility

### JavaScript Modules

#### `public/js/main.js` (500+ lines)
- **Navbar Toggle** - Mobile menu functionality
- **Smooth Scroll** - Anchor link navigation
- **Image Slider** - Hero carousel with auto-rotate
- **Before/After Slider** - Interactive comparison slider
- **Modal Functionality** - Dialog open/close
- **Scroll Animations** - Fade-in on scroll
- **Counter Animation** - Animated statistics
- **Form Submission** - AJAX form handling
- **Notifications** - Toast/notification system
- **Lazy Loading** - Image optimization
- **Active Nav Link** - Highlight current page
- **WhatsApp Integration** - Click-to-chat
- **Utility Functions** - Validation, formatting

#### `public/js/estimator.js` (400+ lines)
- **EstimatorCalculator** - Basic price calculation
- **AdvancedEstimator** - Multi-option calculator
- **QuickCalculator** - Simplified calculator
- **Price Matrix** - Service type & quality-based pricing
- **Real-time Calculation** - Live result display
- **Form Validation** - Data sanitization
- **API Integration** - Backend submission

#### `public/js/form-validation.js` (600+ lines)
- **FormValidator** - Generic form validation
- **ContactFormValidator** - Contact form specific
- **LeadFormValidator** - Lead capture forms
- **QuoteFormValidator** - Quote request forms
- **MultiStepFormValidator** - Step-by-step forms
- **Client-side Validation** - Email, phone, required fields
- **Error Display** - Inline error messages
- **Server Submission** - AJAX POST requests
- **Accessibility** - ARIA attributes

### Reusable Components

**`public/components/navbar.html`**
- Sticky navigation
- Logo/branding
- Menu items
- CTA buttons
- Mobile toggle
- Active state highlighting

**`public/components/footer.html`**
- Company info
- Quick links
- Services links
- Contact information
- Social media
- Legal links
- Copyright info

**`public/components/testimonial-card.html`**
- Star rating
- Quote text
- Author avatar
- Name & location
- Multiple variations
- Lazy loading support

## 🎨 Design Token System

### Colors
```css
--color-primary: #0F2B5A        /* Deep Indigo */
--color-secondary: #F5A623      /* Warm Amber */
--color-text-dark: #111827      /* Charcoal Black */
--color-text-light: #4B5563     /* Slate Gray */
--color-white: #ffffff
--color-light-gray: #F9FAFB
```

### Typography
```css
--font-heading: "Poppins"
--font-body: "Inter"
--font-size-4xl: 2.25rem (36px)
--font-size-3xl: 1.875rem (30px)
--font-size-2xl: 1.5rem (24px)
--font-size-xl: 1.25rem (20px)
--font-size-lg: 1.125rem (18px)
--font-size-base: 1rem (16px)
```

### Spacing (8px base unit)
```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 0.75rem (12px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

## 📱 Responsive Breakpoints

- **Mobile:** ≤ 640px
- **Tablet:** 641px - 1024px
- **Desktop:** ≥ 1025px

## 🚀 Quick Start

### 1. Setup
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
# Server runs on http://localhost:3001
```

### 3. Access Pages
- Homepage: http://localhost:3001/
- Services: http://localhost:3001/services
- Projects: http://localhost:3001/projects
- Contact: http://localhost:3001/contact
- Estimator: http://localhost:3001/estimate

## 📝 Page Templates

### Basic Page Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description">
  <title>Page Title | Mokal Builder</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body>
  <!-- NAVBAR -->
  <header>
    <!-- Copy from public/components/navbar.html -->
  </header>

  <!-- PAGE CONTENT -->
  <main>
    <!-- Your content here -->
  </main>

  <!-- FOOTER -->
  <footer>
    <!-- Copy from public/components/footer.html -->
  </footer>

  <!-- SCRIPTS -->
  <script src="/js/main.js"></script>
  <script src="/js/form-validation.js"></script>
  <!-- Page-specific scripts as needed -->
</body>
</html>
```

## 🎯 Common Implementation Tasks

### 1. Create New Page
1. Create `public/html/new-page.html`
2. Copy navbar and footer components
3. Add content using card/grid components
4. Link in navbar and footer
5. Add to server routing

### 2. Add Image Slider
```html
<div class="hero-slider">
  <div class="slide active">
    <img src="/images/hero/1.jpg" alt="Project 1">
  </div>
  <div class="slide">
    <img src="/images/hero/2.jpg" alt="Project 2">
  </div>
  <button class="prev">❮</button>
  <button class="next">❯</button>
  <div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
  </div>
</div>
```

### 3. Add Form
```html
<form id="contact-form" action="/api/contact" method="POST">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<script src="/js/form-validation.js"></script>
<script>
  new ContactFormValidator('#contact-form');
</script>
```

### 4. Add WhatsApp Button
```html
<button 
  class="btn btn-whatsapp" 
  data-whatsapp="919876543210"
  data-message="Hello, I'd like information about your services."
>
  Chat on WhatsApp
</button>
```

### 5. Add Estimator
```html
<form class="estimator-form">
  <h2>Get Your Quote</h2>
  <div class="form-group">
    <label for="area">Area (sq ft) *</label>
    <input type="number" id="area" name="area" required>
  </div>
  <button type="submit" class="btn btn-primary">Calculate</button>
  <div class="estimator-result" style="display: none;"></div>
</form>

<script src="/js/estimator.js"></script>
```

## ✅ Accessibility Checklist

- [x] Semantic HTML (header, main, section, footer, nav)
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Focus states on all interactive elements
- [x] Color contrast ratio ≥ 4.5:1 (WCAG AA)
- [x] Alt text on all images
- [x] Form labels associated with inputs
- [x] Skip navigation link (optional)
- [x] Reduced motion support via prefers-reduced-motion

## 📊 Performance Optimization

- **Lazy Loading:** Images with `data-src` attribute
- **Font Optimization:** Google Fonts with font-display: swap
- **CSS:** Minified and organized by section
- **JavaScript:** Modular, can be deferred or async
- **Images:** Use WebP with JPEG fallback
- **CMS Ready:** Easily integrates with Strapi/Sanity

## 🔐 Security Best Practices

- Input sanitization in form-validation.js
- CSRF token ready (add to backend)
- Rate limiting recommended (implement in backend)
- HTTPS enforced (configure in server)
- Content Security Policy headers (configure in server)

## 📚 Additional Resources

- Google Fonts: https://fonts.google.com
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- Web Vitals: https://web.dev/vitals/

## 🤝 Contributing

1. Follow existing code style
2. Use CSS variables for colors/spacing
3. Add comments for complex logic
4. Test on mobile devices (640px breakpoint)
5. Validate accessibility with WCAG guidelines
6. Test form submissions
7. Verify lazy loading works

## 📋 File Size References

- `style.css`: ~50KB (unminified)
- `main.js`: ~15KB
- `estimator.js`: ~10KB
- `form-validation.js`: ~18KB
- **Total:** ~93KB (unminified, uncompressed)
- **Total (minified):** ~35KB
- **Total (gzipped):** ~12KB

## 🎓 Learning Resources

- **CSS Architecture:** Look at style.css for organization
- **JavaScript Patterns:** See class-based approach in validators
- **Responsive Design:** Review media queries in style.css
- **Form Handling:** Study form-validation.js for best practices
- **Performance:** Use lazy loading patterns shown in main.js

---

**Last Updated:** October 2024  
**Maintained By:** Mokal Builder Development Team  
**License:** MIT  
**Version:** 1.0.0
