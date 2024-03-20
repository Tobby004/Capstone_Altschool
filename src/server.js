const express = require('express');
const bodyParser = require('body-parser');
const BitlyClient = require('bitly').BitlyClient;
const QRCode = require('qrcode');
const firebase = require('firebase');

const app = express();
const port = 3000;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNosFHNVfv_hB-xAD3fSRCoF1O6DuotTo",
    authDomain: "scissor-capstone.firebaseapp.com",
    projectId: "scissor-capstone",
    storageBucket: "scissor-capstone.appspot.com",
    messagingSenderId: "694128945269",
    appId: "1:694128945269:web:c1f7b8ab0b07a68f6cf03c",
    measurementId: "G-ZLBRK70ZRZ"
  };
firebase.initializeApp(firebaseConfig);

// Initialize Bitly client
const bitly = new BitlyClient('5c01e515fd8f9679337bb46f66c6f311ea50c510', {});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// URL Shortening API endpoint
app.post('/shorten', async (req, res) => {
  const longUrl = req.body.longUrl;

  try {
    const response = await bitly.shorten(longUrl);
    res.json({ shortenedUrl: response.link });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/custom-url', (req, res) => {
    const longUrl = req.body.longUrl;
    const customUrl = req.body.customUrl;
  
    // Check if custom URL is available (not already taken)
    // Example logic (you need to replace it with your actual implementation):
    const isCustomUrlAvailable = checkIfCustomUrlAvailable(customUrl);
  
    if (!isCustomUrlAvailable) {
      return res.status(400).json({ error: 'Custom URL is already in use' });
    }
  
    // Associate custom URL with long URL (save it to database or storage)
    // Example logic:
    saveCustomUrl(longUrl, customUrl);
  
    // Return success response
    res.json({ message: 'Custom URL created successfully', customUrl: customUrl });
  });

// QR Code Generation API endpoint
app.post('/generate-qr', async (req, res) => {
  const text = req.body.text;

  try {
    const qrCode = await QRCode.toDataURL(text);
    res.send(qrCode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/analytics', (req, res) => {
    const url = req.body.url;
    const action = req.body.action;
  
    // Log the analytics event (e.g., click)
    // Example logic:
    logAnalyticsEvent(url, action);
  
    // Return success response
    res.json({ message: 'Analytics event logged successfully' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
