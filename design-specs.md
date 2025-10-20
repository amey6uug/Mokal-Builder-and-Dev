# Mokal Builder - Design System & Mockup Specifications

## Overview
Modern, enterprise-grade website design for Mokal Builder, inspired by Asian Paints: clean, image-forward, trust-driven, and conversion-optimized. Built for desktop and mobile with a focus on accessibility (WCAG 2.1 AA).

## Design System

### Colors (Tokenized)
- **Primary**: Deep Indigo (#1e3a8a) - Trust, professionalism
- **Secondary**: Warm Brick (#b91c1c) - Construction heritage
- **Accent**: Construction Yellow (#eab308) - Action, energy
- **Neutrals**:
  - White (#ffffff)
  - Gray-50 (#f9fafb)
  - Gray-100 (#f3f4f6)
  - Gray-600 (#4b5563)
  - Gray-900 (#111827)
  - Black (#000000)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Sizes**:
  - H1: 3.5rem (56px) desktop, 2.5rem (40px) mobile
  - H2: 2.25rem (36px) desktop, 1.875rem (30px) mobile
  - H3: 1.5rem (24px)
  - Body Large: 1.25rem (20px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)
- **Line Heights**: 1.2 for headings, 1.5 for body

### Spacing (8px Grid)
- **Base Unit**: 8px
- **Tokens**:
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px
  - 2xl: 48px
  - 3xl: 64px
  - 4xl: 96px

### Elevation (Shadows)
- **Low**: 0 1px 3px rgba(0,0,0,0.12)
- **Medium**: 0 4px 6px rgba(0,0,0,0.07)
- **High**: 0 10px 15px rgba(0,0,0,0.1)

### Border Radius
- **Small**: 4px
- **Medium**: 8px
- **Large**: 12px
- **Full**: 9999px

## Layout Specifications

### Desktop Frame (1440px width)
- **Breakpoint**: 1024px+
- **Container**: Max-width 1280px, centered
- **Padding**: 24px horizontal

### Mobile Frame (375px width)
- **Breakpoint**: <768px
- **Container**: Full width
- **Padding**: 16px horizontal

## Component Specifications

### Navbar (Sticky)
- **Height**: 64px
- **Background**: White with 0.8 opacity shadow
- **Logo**: Left, Inter Bold 24px, Deep Indigo
- **Menu Items**: Right, Inter Regular 16px, Gray-600, hover Gray-900
- **CTAs**: Yellow button (Get Quote), Green button (WhatsApp)
- **Mobile**: Hamburger menu, slide-down overlay
- **Accessibility**: Skip link, keyboard navigation

### Trust Bar
- **Height**: 96px
- **Background**: Gray-50
- **Layout**: 3 columns (desktop), 1 column (mobile)
- **Content**: Icon + stat + label
- **Typography**: H3 Bold 24px (stat), Body 16px (label)
- **Icons**: Custom SVG, 32px

### Hero Section
- **Height**: 100vh
- **Background**: Hero image (hero-bg.webp) with 50% black overlay
- **Content**: Centered, max-width 768px
- **Headline**: H1 Bold, White
- **Subheadline**: Body Large, White
- **CTAs**: 3 buttons (Yellow primary, Indigo secondary, Green tertiary)
- **Form**: Right-aligned card, White background 90% opacity
- **Form Fields**: Label + input, 3 fields (area, service dropdown, phone)
- **Submit**: Indigo button

### Services Grid
- **Layout**: 3 columns (desktop), 1 column (mobile)
- **Card**: White background, border, hover shadow
- **Icon**: 64px emoji or SVG
- **Title**: H3 Semibold
- **Description**: Body text

### Project Card
- **Size**: 400x300px (desktop), full width (mobile)
- **Image**: 16:9 aspect ratio
- **Overlay**: Black gradient on hover
- **Button**: Yellow, "View Before/After"
- **Filter Buttons**: Above grid, active state Indigo

### Before/After Slider
- **Component**: Image comparison slider
- **Controls**: Drag handle, toggle buttons
- **Labels**: "Before" / "After" text overlays
- **Animation**: Smooth transition

### Estimator Micro-Form
- **Fields**: Area (text), Service (select), Phone (tel)
- **Validation**: Required, error states
- **Submit**: POST to /api/leads

### Testimonials Slider
- **Layout**: Carousel, 3 slides visible (desktop), 1 (mobile)
- **Card**: Gray-50 background, quote + name + location
- **Controls**: Dots, arrows
- **Typography**: Body italic for quote

### Client Portal Intro Card
- **Size**: 600x400px
- **Background**: Indigo gradient
- **Content**: Headline, description, CTA button
- **CTA**: "Access Portal"

### Footer
- **Background**: Gray-900
- **Layout**: 4 columns (desktop), stacked (mobile)
- **Links**: Hover states
- **Copyright**: Centered, Gray-600

## Accessibility Notes (WCAG 2.1 AA)
- **Color Contrast**: All text meets 4.5:1 ratio
- **Focus Indicators**: 2px solid outline, 2px radius
- **Semantic HTML**: Proper headings, landmarks
- **ARIA Labels**: For interactive elements
- **Keyboard Navigation**: Tab order logical
- **Alt Text**: Descriptive for images
- **Form Labels**: Explicitly associated
- **Screen Reader**: Tested with NVDA/JAWS

## Copy Placeholders

### Hero
- **Headline**: Build Your Dream Home with Expert Craftsmanship
- **Subheadline**: Professional construction and renovation services for quality results

### Services
- **Residential Construction**: Complete home building from foundation to finish, ensuring durability and modern design for your family's future.
- **Renovation & Remodeling**: Transform existing spaces with innovative solutions, enhancing functionality and aesthetic appeal.
- **Waterproofing & Finishes**: Protect your property with advanced waterproofing and premium finishes for long-lasting beauty.

### Testimonials
- **Rajesh Kumar, Mumbai**: Mokal Builder exceeded our expectations with their professional team and quality workmanship. Our new home is everything we dreamed of and more.
- **Priya Sharma, Delhi**: From planning to completion, the renovation process was smooth and efficient. Highly recommend their services for any home improvement needs.
- **Amit Patel, Ahmedabad**: The waterproofing work was done expertly, and we've had no issues even during heavy rains. Trustworthy and reliable contractors.

## Export Guidance
- **Format**: WebP for images, PNG for icons
- **Resolution**: 2x for retina displays
- **Naming**: component-name-variant.webp (e.g., hero-bg-desktop.webp)
- **Sample Images**:
  - hero-bg.webp (1920x1080)
  - before1.webp, after1.webp (800x600)
  - before2.webp, after2.webp (800x600)
  - before3.webp, after3.webp (800x600)
  - testimonial-avatar1.webp (100x100)
  - testimonial-avatar2.webp (100x100)
  - testimonial-avatar3.webp (100x100)

## Implementation Notes
- Use Tailwind CSS for rapid prototyping
- Components built with React/TypeScript
- Responsive design with mobile-first approach
- Performance optimized with lazy loading
- SEO with structured data (LocalBusiness schema)