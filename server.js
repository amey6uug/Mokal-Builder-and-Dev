const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public directory (includes images, html, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/html'));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// Route for services page
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/services.html'));
});

// Route for about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/about.html'));
});

// Route for portfolio page
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/portfolio.html'));
});

// Route for faq page
app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/faq.html'));
});

// Route for contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/contact.html'));
});

// Route for team page
app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/team.html'));
});

// Route for estimator page
app.get('/estimator', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/estimator.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/html/index.html'));
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n✨ Mokal Builder Website Running!\n`);
  console.log(`🌐 Open your browser: http://localhost:${PORT}`);
  console.log(`\n📄 Pages available:`);
  console.log(`   • Home:     http://localhost:${PORT}/`);
  console.log(`   • Services: http://localhost:${PORT}/services`);
  console.log(`   • Contact:  http://localhost:${PORT}/contact`);
  console.log(`\n✅ All files are pure HTML, CSS, and JavaScript!\n`);
});
