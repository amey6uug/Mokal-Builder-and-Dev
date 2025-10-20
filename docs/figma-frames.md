# Mokal Builder — UI Kit (Figma File Structure)

## 📁 File: "Mokal Builder — UI Kit"

### 🎨 Pages Structure:

#### 1. **Tokens** (Design System)
- **Color Palette** (6 tokens):
  - Primary: `#1e40af` (Indigo-800)
  - Secondary: `#eab308` (Yellow-500)
  - Accent: `#dc2626` (Red-600)
  - Neutral-50: `#fafafa`
  - Neutral-900: `#111827`
  - Success: `#16a34a`

- **Typography Scale**:
  - H1: 48px/56px (Bold)
  - H2: 36px/44px (Bold)
  - H3: 24px/32px (SemiBold)
  - Body Large: 18px/28px (Regular)
  - Body: 16px/24px (Regular)
  - Caption: 14px/20px (Medium)

- **Spacing Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

- **Border Radius**: 4, 8, 12, 16, 24px

- **Shadows**:
  - sm: 0 1px 2px rgba(0,0,0,0.05)
  - md: 0 4px 6px rgba(0,0,0,0.07)
  - lg: 0 10px 15px rgba(0,0,0,0.1)
  - xl: 0 20px 25px rgba(0,0,0,0.15)

- **Grid System**:
  - Desktop: 12-column (max-width: 1280px, gutters: 24px)
  - Tablet: 8-column (max-width: 768px, gutters: 16px)
  - Mobile: 4-column (max-width: 375px, gutters: 12px)

#### 2. **Components** (Component Library)
- **Navbar**: Sticky header with logo, nav links, CTA button, mobile hamburger
- **Hero**: Full-width section with headline, subheadline, CTAs, background image
- **TrustBar**: 3-column stats display with animated counters
- **Services**: 3-column grid with service cards (icon, title, description, CTA)
- **Projects**: Carousel with project cards, filter buttons, before/after toggle
- **Testimonials**: Auto-advancing carousel with star ratings
- **CTA Buttons**: Primary (filled), Secondary (outlined), Ghost (text-only)
- **Forms**: Contact form, estimator form with validation states
- **Footer**: Multi-column layout with links, social icons, contact info

#### 3. **Desktop Frames** (1440px width)
- **Home Page**:
  - Navbar (sticky)
  - Hero section (full viewport)
  - Trust Bar
  - Services section
  - Projects carousel
  - Testimonials slider
  - Footer

- **Project Case Study**:
  - Navbar
  - Hero with project title and key stats
  - Before/After slider (full width)
  - Project details grid (timeline, budget, area)
  - Gallery grid (3x3 layout)
  - Related projects
  - CTA section
  - Footer

#### 4. **Mobile Frames** (375px width)
- **Home Page Mobile**:
  - Collapsed navbar with hamburger menu
  - Stacked hero (text over background)
  - Single-column trust stats
  - Stacked service cards
  - Touch-friendly carousel controls
  - Footer accordion

- **Project Case Study Mobile**:
  - Mobile navbar
  - Hero with project image
  - Swipeable before/after
  - Stacked project details
  - Gallery in 2-column grid
  - Mobile-optimized CTAs

#### 5. **Exports** (Asset Export Guidelines)
- **Image Formats**: WebP primary (quality: 85%), JPEG fallback (quality: 80%)
- **Cropping Ratios**:
  - Hero: 16:9 (1920x1080px)
  - Thumbnails: 3:2 (600x400px)
  - Before/After: 3:2 (800x533px)
- **Retina Assets**: 2x versions for high-DPI displays
- **Alt Text Variants**:
  - Hero: "Professional construction team building modern villa in Nagpur"
  - Service: "Expert {service} services by Mokal Builder construction company"
  - Project: "Before and after {project type} renovation in {location}"

### 🎯 **Accessibility Notes**:
- **Contrast Ratios**: All text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **Focus States**: 2px solid outline in primary color (#1e40af)
- **ARIA Labels**: Screen reader friendly navigation and form controls
- **Keyboard Navigation**: Tab order follows logical reading flow

### 📍 **Figma File Location**: `Figma > File "Mokal Builder — UI Kit"`
### 🔗 **Component Mapping**: `Frontend: apps/web/src/components/` (each component has corresponding .tsx file)</content>
<parameter name="filePath">c:\Users\core3\OneDrive\Attachments\mokal builder\docs\figma-frames.md