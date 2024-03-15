// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Placeholder storage for shortened URLs
const shortenedURLs = {};

// URL Shortening API
app.post('/api/shorten', (req, res) => {
  const { longURL } = req.body;
  const shortURL = generateShortURL();
  shortenedURLs[shortURL] = longURL;
  res.json({ shortURL });
});



// Custom URLs API
app.post('/api/custom', (req, res) => {
  const { longURL, customSlug } = req.body;
  if (shortenedURLs[customSlug]) {
    return res.status(400).json({ error: 'Custom slug already exists.' });
  }
  shortenedURLs[customSlug] = longURL;
  res.json({ shortURL: customSlug });
});

// QR Code Generation API
app.post('/api/qrcode', (req, res) => {
  const { data } = req.body;
  // Generate QR code logic (you might use a library for this)
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}`;
  res.json({ qrCodeURL });
});

// Data Analytics API
app.get('/api/analytics/:shortURL', (req, res) => {
  const { shortURL } = req.params;
  const longURL = shortenedURLs[shortURL];
  if (!longURL) {
    return res.status(404).json({ error: 'Short URL not found.' });
  }
  // Implement analytics logic (e.g., tracking clicks)
  res.json({ analyticsData: /* your analytics data */ });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to generate a random short URL
function generateShortURL() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 6;
  let shortURL = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortURL += characters.charAt(randomIndex);
  }
  return shortURL;
}
