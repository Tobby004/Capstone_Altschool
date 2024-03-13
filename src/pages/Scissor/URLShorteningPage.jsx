// URLShorteningPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Button } from 'components';

const URLShorteningPage = () => {
  const [longURL, setLongURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenURL = async () => {
    try {
      const response = await fetch('https://api.example.com/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalURL: longURL }),
      });

      if (response.ok) {
        const result = await response.json();
        setShortenedURL(result.shortenedURL);
      } else {
        console.error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Text size="txtGilroySemiBold32">URL Shortening</Text>
      <Input
        type="text"
        placeholder="Enter your URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleShortenURL}>Shorten URL</Button>
      {shortenedURL && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
            {shortenedURL}
          </a>
        </div>
      )}
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default URLShorteningPage;
