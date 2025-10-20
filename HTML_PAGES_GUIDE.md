# 🌐 Mokal Builder - HTML Pages Quick Reference

## Accessing the Website

### Via Next.js Dev Server
```
http://localhost:3001/html/index.html
http://localhost:3001/html/services.html
http://localhost:3001/html/about.html
```

### Direct HTML Files
All HTML files are located in: `public/html/`

## Page Structure

### 1. **index.html** - Homepage
- Hero section with main CTA
- Stats bar (500+ projects, 15+ years, etc.)
- Services grid (3 core services)
- Testimonials carousel
- Call-to-action section
- Footer

**Key Sections:**
- `#home` - Hero
- `#services` - Services section
- Navigation to all other pages

---

### 2. **services.html** - Services Detail Page
- Service categories:
  - Residential Construction
  - Commercial Construction
  - Renovation & Remodeling
  - Interior Design
  - Project Management

**Features:**
- Expandable service cards
- Process timeline
- FAQ section specific to services
- Pricing guide placeholder

---

### 3. **portfolio.html** - Project Showcase
- Before/after image galleries
- Project filtering by category
- Case studies
- Client testimonials per project

**Categories:**
- All Projects
- Residential
- Commercial
- Renovation

---

### 4. **about.html** - About Company
- Company mission & values
- Timeline of company history
- Team introduction
- Awards & certifications
- Why choose us section

---

### 5. **contact.html** - Contact & Inquiries
- Contact form (email validation)
- Office location map
- Contact information
- WhatsApp business link
- Team members contact details

**Form Fields:**
- Name, Email, Phone
- Project Type, Budget Range
- Message/Query
- Service of Interest

---

### 6. **estimator.html** - Project Cost Estimator
- Project type selector
- Size/scope inputs
- Material quality options
- Timeline preferences
- Estimated cost calculator
- Contact form integration

**Calculator Inputs:**
- Project area (sq ft)
- Project type
- Material grade
- Timeline
- Additional requirements

---

### 7. **faq.html** - Frequently Asked Questions
- Common construction questions
- Payment & timeline info
- Quality assurance details
- Warranty information
- Permit & approval process

**Accordion-style Q&A**

---

### 8. **team.html** - Our Team
- Team member profiles
- Roles & responsibilities
- Experience highlights
- Contact information
- Team achievements

---

## Color Theme

### Primary Colors
- **Deep Indigo**: `#0F2B5A` - Main buttons, headings
- **Warm Amber**: `#F5A623` - Links, hover effects
- **White**: `#ffffff` - Background

### Text Colors
- **Dark**: `#111827` - Headings
- **Gray**: `#4B5563` - Body text
- **Light Gray**: `#6b7280` - Metadata

See `COLOR_THEME.md` for complete palette

---

## Common HTML Elements

### Buttons
```html
<!-- Primary Button -->
<a href="#" class="btn-primary">Get Estimate</a>

<!-- Secondary Button -->
<a href="#" class="btn-secondary">Learn More</a>

<!-- Navigation Button -->
<a href="#" class="btn-nav">Contact</a>
```

### Cards
```html
<!-- Service Card -->
<div class="service-card">
    <div class="service-icon">🏠</div>
    <h3>Service Title</h3>
    <p>Description</p>
    <a href="#" class="service-cta">Learn More →</a>
</div>

<!-- Testimonial Card -->
<div class="testimonial-card">
    <div class="stars">★★★★★</div>
    <p class="testimonial-text">Quote</p>
    <div class="testimonial-author">
        <div class="author-avatar">AB</div>
        <div>
            <div class="author-name">Name</div>
            <div class="author-title">Title</div>
        </div>
    </div>
</div>
```

### Navigation
```html
<nav class="navbar">
    <div class="navbar-container">
        <a href="/" class="logo">
            <div class="logo-icon"><img src="/images/logo.jpg" alt="Logo"></div>
            <div class="logo-text">
                <h1>Mokal Builder</h1>
            </div>
        </a>
        <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="/html/services.html" class="nav-link">Services</a>
            <!-- More links -->
        </div>
    </div>
</nav>
```

---

## JavaScript Features

### Smooth Scrolling
- Click any anchor link to smoothly scroll to section
- Auto-handled by browser

### Navbar Scroll Effect
```javascript
// Automatically applies 'scrolled' class when user scrolls down
// Changes navbar shadow for better visibility
```

### Forms
- Email validation
- Form submission handling
- Success/error messages

### Animations
- CSS fade-in animations on page load
- Hover effects on cards and buttons
- Smooth transitions (0.3s - 0.4s)

---

## Responsive Design

All pages are fully responsive:
- **Desktop**: Full layout with multi-column grids
- **Tablet**: 2-column layouts
- **Mobile**: Single column, optimized touch targets

**Breakpoint**: 768px (adjusts at tablet size)

---

## WhatsApp Integration

Every page includes a floating WhatsApp button:
```html
<a href="https://wa.me/919876543210?text=Hi%20Mokal%20Builder" 
   target="_blank" class="whatsapp-btn">💬</a>
```

**Customization:**
- Replace `919876543210` with your WhatsApp number
- Change message text in the `?text=` parameter

---

## Logo & Assets

### Logo Location
`public/images/logo.jpg`

### Using in HTML
```html
<img src="/images/logo.jpg" alt="Mokal Builder Logo">
```

---

## Form Handling

### Contact Form (contact.html)
```html
<form class="contact-form">
    <input type="text" placeholder="Full Name" required>
    <input type="email" placeholder="Email" required>
    <input type="tel" placeholder="Phone Number">
    <textarea placeholder="Your Message"></textarea>
    <button type="submit" class="btn-primary">Send Message</button>
</form>
```

### Estimator Form (estimator.html)
```html
<form class="estimator-form">
    <select name="project-type" required>
        <option value="">Select Project Type</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
    </select>
    <!-- More fields -->
    <button type="submit" class="btn-primary">Calculate Estimate</button>
</form>
```

---

## CSS Classes Quick Reference

| Class | Usage |
|-------|-------|
| `.btn-primary` | Primary call-to-action button |
| `.btn-secondary` | Secondary button (outline) |
| `.btn-nav` | Navigation bar button |
| `.service-card` | Service showcase card |
| `.testimonial-card` | Client review card |
| `.nav-link` | Navigation menu link |
| `.section-title` | Main section heading |
| `.section-subtitle` | Section subtitle |
| `.hero` | Hero section wrapper |
| `.navbar` | Fixed navigation bar |
| `.whatsapp-btn` | Floating WhatsApp button |

---

## Deployment Checklist

- [ ] Update phone number (WhatsApp & contact)
- [ ] Update email address
- [ ] Update office address
- [ ] Replace placeholder images
- [ ] Customize testimonials
- [ ] Update team member info
- [ ] Set correct service descriptions
- [ ] Configure form backend
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Clear browser cache
- [ ] Deploy to Netlify

---

## Troubleshooting

### Colors not updating?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Del)
- Check CSS variables in `<style>` section
- Verify color hex values

### Links not working?
- Check file paths (case-sensitive on Linux)
- Ensure files exist in `public/html/` folder
- Verify relative vs absolute paths

### Images not loading?
- Check logo at `public/images/logo.jpg`
- Verify image paths in HTML
- Use `/images/` prefix for public assets

### Mobile layout broken?
- Check viewport meta tag: `<meta name="viewport">`
- Verify CSS media queries
- Test in browser DevTools device mode

---

## Support

For questions or issues:
- Check the COLOR_THEME.md for styling
- Review this guide for structure
- Check public/html/*.html for examples
- Contact: info@mokalbuilder.com

---

**Last Updated**: October 20, 2025  
**Status**: ✅ All HTML pages updated with refined color theme
