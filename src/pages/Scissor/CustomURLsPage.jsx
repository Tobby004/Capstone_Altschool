// CustomURLsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Button } from 'components';

const CustomURLsPage = () => {
  const [longURL, setLongURL] = useState('');
  const [customURL, setCustomURL] = useState('');
  const [customURLResult, setCustomURLResult] = useState('');

  const handleCreateCustomURL = async () => {
    try {
      const response = await fetch('https://api.example.com/create-custom-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalURL: longURL, customURL: customURL }),
      });

      if (response.ok) {
        const result = await response.json();
        setCustomURLResult(result.customURL);
      } else {
        console.error('Failed to create custom URL');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Text size="txtGilroySemiBold32">Custom URLs</Text>
      <Input
        type="text"
        placeholder="Enter your URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        className="mb-4"
      />
      <Input
        type="text"
        placeholder="Enter custom URL"
        value={customURL}
        onChange={(e) => setCustomURL(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleCreateCustomURL}>Create Custom URL</Button>
      {customURLResult && (
        <div>
          <p>Custom URL:</p>
          <a href={customURLResult} target="_blank" rel="noopener noreferrer">
            {customURLResult}
          </a>
        </div>
      )}
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default CustomURLsPage;
