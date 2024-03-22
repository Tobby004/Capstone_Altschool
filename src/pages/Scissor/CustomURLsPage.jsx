import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Button } from 'components';
import './CustomURLsPage.css';

const CustomURLsPage = () => {
  const [longURL, setLongURL] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [customURLResult, setCustomURLResult] = useState('');
  const [error, setError] = useState(null);

  const handleCreateCustomURL = async () => {
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/bitlinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalURL: longURL, customURL: customSlug }),
      });

      if (response.ok) {
        const result = await response.json();
        setCustomURLResult(result.customURL);
      } else {
        setError('Failed to create custom URL');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('Failed to create custom URL');
    }
  };

  return (
    <div className="container">
      <Text size="txtGilroySemiBold32">Custom URLs</Text>
      <div className="input-container">
      <Input
  type="text"
  placeholder="Enter your URL"
  value={longURL || ''}
  onChange={(e) => setLongURL(e.target.value)}
  className="input-element"
/>
<Input
  type="text"
  placeholder="Enter custom slug (optional)"
  value={customSlug || ''}
  onChange={(e) => setCustomSlug(e.target.value)}
  className="input-element"
/>
      </div>
      <div className="button-container">
        <Button onClick={handleCreateCustomURL}>Create Custom URL</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {customURLResult && (
        <div>
          <p>Custom URL:</p>
          <a href={customURLResult} target="_blank" rel="noopener noreferrer">
            {customURLResult}
          </a>
        </div>
      )}
      <Link to="/" className="homepage-button">Homepage</Link>
    </div>
  );
};

export default CustomURLsPage;
