# Deployment Checklist

## Pre-Deploy
- [ ] Update phone number, email, and address in `public/html/*.html`
- [ ] Confirm all navbar/footer links work
- [ ] Verify contact form behavior
- [ ] Optimize large images in `public/images/`
- [ ] Confirm `robots.txt` and `sitemap.xml` are correct

## Local Verification
- [ ] Run `npm run dev`
- [ ] Check routes: `/`, `/services`, `/about`, `/portfolio`, `/contact`, `/faq`, `/team`, `/estimator`, `/privacy`, `/terms`
- [ ] Verify mobile and desktop layouts
- [ ] Verify custom 404 page

## Deploy Options
### Node Hosting
- [ ] Set Node version to 18+
- [ ] Start command: `node server.js`
- [ ] Ensure `public/` is included in deployment artifact

### Static Hosting (Netlify)
- [ ] Publish directory: `public/`
- [ ] Build command: none required
- [ ] Add redirects only if needed for pretty routes

## Post-Deploy
- [ ] Run a full page smoke test
- [ ] Test contact flow end-to-end
- [ ] Check performance in browser Lighthouse
- [ ] Monitor for 404s and broken assets
