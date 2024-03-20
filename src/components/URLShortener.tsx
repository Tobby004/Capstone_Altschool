import React, { useState } from 'react';

const URLShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Original URL:', originalUrl, 'Custom Slug:', customSlug);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL here"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom slug (optional)"
        value={customSlug}
        onChange={(e) => setCustomSlug(e.target.value)}
      />
      <button type="submit">Shorten URL</button>
      {shortenedUrl && <div>Shortened URL: {shortenedUrl}</div>}
    </form>
  );
};

export default URLShortenerForm;
