# Mokal Builder Website

Static multi-page construction website served by Express.

## Stack
- Node.js 18+
- Express 4
- Static assets in `public/`

## Run Locally
```bash
npm install
npm run dev
```

Open `http://localhost:3001`.

## Project Structure
- `server.js` - Express routes and static hosting
- `public/html/` - All HTML pages
- `public/css/` - Shared styles
- `public/js/` - Frontend JavaScript
- `public/images/` - Images and media
- `public/assets/` - Fonts and PDFs

## Main Routes
- `/` or `/index`
- `/services`
- `/about`
- `/portfolio`
- `/project-details`
- `/contact`
- `/faq`
- `/team`
- `/estimator`
- `/privacy`
- `/terms`

## Deploy
This is a static site with a lightweight Node server.
- Netlify static export path: `public/`
- Node hosting: run `node server.js`

## Notes
- No React/Next.js build pipeline is used.
- Keep edits focused in `public/` and `server.js`.
