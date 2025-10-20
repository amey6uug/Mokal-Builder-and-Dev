# 🏗️ Mokal Builder - Premium Construction Website

## ✨ Project Overview

Mokal Builder is a professional, modern construction company website built with **HTML5, CSS3, and JavaScript**. The site features a refined color theme with deep indigo primary colors, warm amber accents, and a clean white background - designed for professional trust and visual appeal.

## 🎨 Color Theme

### Refined Palette Applied ✅
- **Primary**: Deep Indigo (`#0F2B5A`) - Trust, professionalism
- **Accent**: Warm Amber (`#F5A623`) - Energy, call-to-action
- **Background**: White (`#ffffff`) - Clean, professional
- **Text**: Dark Gray (`#111827`) - Excellent readability
- **Accents**: Light Gray (`#F9FAFB`) - Subtle backgrounds

👉 **See `COLOR_THEME.md` for complete color documentation**

## 📁 Project Structure

```
mokal-builder/
├── public/
│   ├── html/                    # HTML pages (Website content)
│   │   ├── index.html          # Homepage
│   │   ├── services.html       # Services details
│   │   ├── about.html          # About company
│   │   ├── portfolio.html      # Project showcase
│   │   ├── contact.html        # Contact form
│   │   ├── faq.html            # FAQ section
│   │   ├── team.html           # Team members
│   │   └── estimator.html      # Cost calculator
│   └── images/
│       └── logo.jpg            # Company logo
├── app/                         # Next.js app (React components)
├── components/                  # React components
├── COLOR_THEME.md              # Color documentation
├── HTML_PAGES_GUIDE.md         # HTML pages reference
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind CSS config
└── netlify.toml               # Netlify deployment config
```

## 🌐 Pages & Features

| Page | Purpose | Key Sections |
|------|---------|--------------|
| **index.html** | Homepage | Hero, Stats, Services, Testimonials, CTA |
| **services.html** | Services Details | 5+ service types, processes, pricing |
| **portfolio.html** | Project Gallery | Before/after, categories, case studies |
| **about.html** | Company Info | Mission, history, team, achievements |
| **contact.html** | Get In Touch | Contact form, map, WhatsApp link |
| **faq.html** | Q&A Section | Common questions, processes |
| **team.html** | Team Members | Profiles, roles, experience |
| **estimator.html** | Cost Calculator | Budget estimation form |

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/ameyGuag/mokal-builder.git

# Navigate to project
cd mokal-builder

# Install dependencies
npm install
```

### Running the Website

#### Option 1: HTML Pages (Recommended - Pure HTML/CSS/JS)
```bash
# Serve HTML files on port 3001
npm run dev

# Access at:
http://localhost:3001/html/index.html
```

#### Option 2: Next.js React App
```bash
# Run Next.js dev server
npm run dev

# Access at:
http://localhost:3000
```

## 📱 Responsive Design

- ✅ **Desktop** (1440px+): Full multi-column layouts
- ✅ **Tablet** (768px - 1439px): 2-column grids
- ✅ **Mobile** (320px - 767px): Single column, touch-optimized

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant color contrast ratios
- ✅ Semantic HTML5 structure
- ✅ Keyboard navigation support
- ✅ Alt text for images
- ✅ Focus states on interactive elements
- ✅ Screen reader friendly

## 🔌 Features

### Navigation
- Fixed navbar with smooth scroll
- Mobile hamburger menu
- Active link highlighting
- Quick access buttons

### Forms
- Contact form (name, email, message)
- Estimator calculator form
- Email validation
- Success/error messages

### Media
- Logo integration (`/images/logo.jpg`)
- Before/after image galleries
- Responsive image loading
- Smooth animations

### Integration
- **WhatsApp**: Floating button for direct messaging
  ```
  wa.me/919876543210
  ```
- **Email**: Contact form & support email
- **Maps**: Location display (customizable)

## 🎯 Customization Guide

### Change Colors
Edit CSS variables in HTML files:
```css
:root {
    --primary: #0F2B5A;        /* Change primary color */
    --accent: #F5A623;         /* Change accent color */
    /* ... more variables ... */
}
```

### Update Contact Info
Find and replace in all HTML files:
- Phone: `919876543210`
- Email: `info@mokalbuilder.com`
- WhatsApp: Same as phone with country code

### Update Services
Edit service cards in `services.html`:
```html
<div class="service-card">
    <div class="service-icon">🏠</div>
    <h3>Your Service Name</h3>
    <p>Your service description</p>
    <a href="#" class="service-cta">Learn More →</a>
</div>
```

### Update Team
Add team members in `team.html`:
```html
<div class="team-member-card">
    <div class="member-avatar">Avatar</div>
    <h3>Member Name</h3>
    <p>Role/Position</p>
</div>
```

## 📦 Build & Deployment

### Local Production Build
```bash
npm run build
npm start
```

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to netlify.com
   - Connect your GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `.next` or `public/`

3. **Deploy**
   - Netlify auto-deploys on push to main branch

## 📊 Performance Optimization

- Optimized images (WebP format)
- CSS minification
- JavaScript optimization
- Lazy loading for images
- CDN-ready structure

## 🔐 Security

- No sensitive data in code
- Environment variables for configs
- Secure form validation
- HTTPS ready
- No script injection vulnerabilities

## 🐛 Troubleshooting

### Colors not updating?
→ Clear browser cache (Ctrl+Shift+Delete)

### Links not working?
→ Check file paths in `public/html/` folder

### Images not showing?
→ Verify logo at `public/images/logo.jpg`

### Mobile layout broken?
→ Check viewport meta tag in HTML

See `HTML_PAGES_GUIDE.md` for more solutions

## 📚 Documentation

- **COLOR_THEME.md** - Complete color palette & guidelines
- **HTML_PAGES_GUIDE.md** - HTML structure & page details
- **netlify.toml** - Netlify deployment config

## 🚢 Deployment Status

- ✅ Local Dev Server: Running on port 3001
- ✅ HTML Pages: All 8 pages with new color theme
- ✅ Responsive: Mobile, tablet, desktop
- 🔄 Git: Ready for GitHub push (5 commits)
- ⏳ Netlify: Awaiting GitHub connection & deploy

## 👥 Team

Built with ❤️ for Mokal Builder by AmeyGuag

## 📞 Contact

- **Phone**: +91-9876543210
- **Email**: info@mokalbuilder.com
- **Location**: Mumbai, India
- **WhatsApp**: wa.me/919876543210

## 📄 License

© 2024 Mokal Builder. All rights reserved.

---

## 🎯 Next Steps

1. ✅ Update phone number & email
2. ✅ Customize service descriptions
3. ✅ Add team member photos
4. ✅ Add project portfolio images
5. ✅ Connect WhatsApp business
6. ✅ Push to GitHub
7. ✅ Deploy to Netlify
8. ✅ Set up analytics
9. ✅ Configure SEO metadata
10. ✅ Launch publicly

---

**Last Updated**: October 20, 2025  
**Current Version**: 2.0 - HTML/CSS/JS with Refined Color Theme  
**Status**: ✅ Development Complete | Ready for Deployment
