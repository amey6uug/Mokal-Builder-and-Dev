# Mokal Builder — Birla Opus Premium Website

> Premium construction and renovation company website with Birla Opus luxury aesthetic. Built for lead generation, portfolio showcase, and client engagement with multi-page architecture.

## ✨ What's New: Birla Opus Multi-Page Website

**Now Available**: 
- ✅ 3 Fully functional pages (Home, Details, Contacts)
- ✅ Premium Birla Opus design theme
- ✅ Glassmorphism effects & smooth animations
- ✅ Responsive mobile, tablet, desktop design
- ✅ Contact form with validation
- ✅ Complete documentation suite

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## � Pages Available

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | / | Landing page with hero, services, projects |
| **Details** | /details | Service showcase with 4 interactive tabs |
| **Contacts** | /contacts | Contact form & inquiry options |

## 📚 Documentation

Start here based on your role:

- **Product Manager**: Read `LAUNCH_SUMMARY.md` (10 min)
- **Developer**: Read `QUICK_START.md` then `BIRLA_OPUS_MULTIPAGE_GUIDE.md`
- **Designer**: Read `VISUAL_GUIDE.md` (10 min)
- **QA/Tester**: Read `IMPLEMENTATION_CHECKLIST.md` (20 min)

**All documentation files in project root** ↓
```
QUICK_START.md                       → 5-min quick reference
BIRLA_OPUS_MULTIPAGE_GUIDE.md        → 30-min technical guide
VISUAL_GUIDE.md                      → 10-min design overview
BIRLA_OPUS_PROJECT_COMPLETE.md       → 15-min project summary
IMPLEMENTATION_CHECKLIST.md          → 20-min verification
LAUNCH_SUMMARY.md                    → 10-min launch prep
FILE_INDEX.md                        → File locations
PROJECT_COMPLETE.md                  → Final status
```

## � Design Theme: Birla Opus

**Aesthetic**: Dark luxury with rich amber/gold accents
- Background: Slate (#0f172a, #1e293b)
- Primary Accent: Amber (#f59e0b, #d97706)
- Text: Light Gray (#d1d5db, #9ca3af)
- Effects: Glassmorphism, glows, smooth animations

## 🎯 Project Overview

**Goal**: Convert website visitors into qualified leads with premium design and professional presentation.

**KPIs**:
- Lead form submissions
- Contact inquiries
- Phone call clicks
- Time on service pages
- Conversion rate
- **Strapi/Sanity** (CMS)
- **Algolia** (search)
- **NextAuth/Auth0** (authentication)
- **Razorpay/Stripe** (payments)
- **Sentry** (error monitoring)
- **GA4** (analytics)

## 📁 Project Structure

```
├── apps/
│   ├── web/                 # Next.js frontend
│   └── api/                 # NestJS backend
├── packages/
│   └── ui/                  # Shared components
├── infra/                   # Infrastructure as Code
├── docs/                    # Documentation & specs
└── .github/workflows/       # CI/CD pipelines
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1e40af` (Indigo-800)
- **Secondary**: `#eab308` (Yellow-500)
- **Accent**: `#dc2626` (Red-600)
- **Neutral-50**: `#fafafa`
- **Neutral-900**: `#111827`

### Typography Scale
- H1: 48px/56px (Bold)
- H2: 36px/44px (Bold)
- H3: 24px/32px (SemiBold)
- Body Large: 18px/28px (Regular)
- Body: 16px/24px (Regular)
- Caption: 14px/20px (Medium)

### Spacing & Layout
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Grid: Desktop (12-col), Tablet (8-col), Mobile (4-col)
- Border Radius: 4, 8, 12, 16, 24px

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Environment Variables

Create `.env.local`:

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# External Services
NEXT_PUBLIC_GA_ID="GA-XXXXXXXXXX"
ALGOLIA_APP_ID="..."
ALGOLIA_API_KEY="..."

# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_S3_BUCKET="mokal-builder"

# Email/SMS
SMTP_HOST="..."
SMTP_USER="..."
SMTP_PASS="..."

# Payments
RAZORPAY_KEY_ID="..."
RAZORPAY_KEY_SECRET="..."
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run type-check   # TypeScript type checking
```

## 📱 Pages & Features

### Public Pages
- `/` — Homepage with hero, services, projects, testimonials
- `/about` — Company story and team
- `/services` — Service offerings with detailed pages
- `/services/:slug` — Individual service pages
- `/projects` — Project portfolio with filtering
- `/projects/:slug` — Detailed case studies
- `/estimate` — Lead generation form
- `/quote` — Full quote request flow
- `/contact` — Contact form and information
- `/blog` — Content marketing (SEO)
- `/client` — Protected client portal

### Client Flows
1. **Hero CTA Flow**: "Book Site Visit" → Modal scheduling → POST /api/leads
2. **Estimate Flow**: Micro-form → POST /api/estimate → Provisional quote → Full quote option
3. **Lead Lifecycle**: Creation → Assignment → Email/Slack notifications → Status updates

## 🔌 API Endpoints

### Core Endpoints
- `POST /api/leads` — Create new leads
- `POST /api/estimate` — Calculate project estimates
- `GET /api/projects` — List projects with filtering
- `GET /api/project/:slug` — Project details
- `POST /api/uploads/presign` — S3 upload URLs

### Authentication
- JWT-based auth for client portal
- Role-based access (SuperAdmin, Editor, ProjectManager, Finance, Support)

## 🎯 SEO & Analytics

### On-Page SEO
- Meta titles/descriptions for all pages
- Structured data (LocalBusiness, Service, Product)
- Open Graph tags for social sharing
- Canonical URLs and sitemap generation

### Analytics Events
- `hero_cta_click`
- `estimate_submit`
- `lead_submit`
- `project_view`
- `whatsapp_click`
- `phone_click`
- `client_login`

### Local SEO
- Address: Nagpur, Maharashtra
- Geo coordinates and service area
- Opening hours and contact info
- Google My Business integration

## 🔒 Security & Performance

### Security Measures
- Server-side validation and sanitization
- Rate limiting on public endpoints
- CSRF protection for state-changing actions
- Signed S3 uploads (presigned URLs)
- Input sanitization and SQL injection prevention

### Performance Optimizations
- Image optimization (WebP, responsive images)
- Code splitting and lazy loading
- Redis caching for API responses
- CDN for static assets
- Lighthouse performance monitoring

## 🧪 Testing & QA

### Test Coverage
- Unit tests (Jest) for business logic
- E2E tests (Playwright) for critical flows
- Accessibility tests (axe-core) in CI
- Performance tests (Lighthouse) with gating

### QA Checklist
- [ ] All critical flows pass functional tests
- [ ] Lighthouse > 90 across all categories
- [ ] Accessibility issues < 5 high-severity
- [ ] SEO structured data present
- [ ] CI pipeline complete with preview deploys
- [ ] Staging identical to production
- [ ] Backups configured and tested

## 🚀 Deployment

### Staging Environment
```bash
# Deploy to staging
git push origin develop
# CI/CD automatically deploys to staging.mokalbuilder.com
```

### Production Deployment
```bash
# Deploy to production
git push origin main
# CI/CD automatically deploys to mokalbuilder.com
```

### Infrastructure
- **Frontend**: Vercel (automatic deployments)
- **Backend**: Railway/AWS ECS
- **Database**: PostgreSQL (managed)
- **Media**: AWS S3 + CloudFront
- **Monitoring**: Sentry + Datadog

## 📋 Content Management

### CMS Schema
- **Projects**: Title, images, case studies, client info
- **Services**: Details, pricing, FAQs, related projects
- **Testimonials**: Client quotes, photos, project references
- **Leads**: Contact info, project details, status tracking

### Content Updates
1. Login to CMS admin panel
2. Update content in respective collections
3. Preview changes in staging
4. Publish to production

## 🔧 Customization Guide

### Adding New Projects
1. Upload images to S3 (use presigned URLs)
2. Create project entry in CMS
3. Add before/after pairs
4. Update related services

### Modifying Services
1. Update service descriptions in CMS
2. Adjust pricing bands
3. Add/remove FAQs
4. Update related projects

### Lead Management
1. Leads automatically created via forms
2. Assign to team members
3. Update status through CRM
4. Automated email notifications

## 📞 Support & Maintenance

### Monitoring
- **Errors**: Sentry dashboard
- **Performance**: Vercel Analytics + Lighthouse
- **Uptime**: Status page monitoring
- **Logs**: Centralized logging with Datadog

### Backup Strategy
- **Database**: Daily automated backups
- **Media**: S3 versioning and cross-region replication
- **Code**: Git history + release tags

### Team Access
- **Developers**: GitHub repository access
- **Content Team**: CMS admin access
- **Client Services**: Protected portal access

## 📈 Growth & Optimization

### A/B Testing Setup
- Hero headline variations
- CTA button text and colors
- Form field requirements
- Pricing display formats

### Conversion Optimization
- Heatmaps and session recordings
- Funnel analysis and drop-off points
- Mobile optimization improvements
- Speed optimizations

---

## 📚 Documentation Links

- [API Documentation](./docs/api-openapi.yaml)
- [CMS Schema](./docs/cms-schema.json)
- [Design System](./docs/figma-frames.md)
- [Deployment Guide](./docs/deployment.md)
- [QA Checklist](./docs/qa-checklist.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary software for Mokal Builder.

---

**Built with ❤️ for Maharashtra's construction industry**