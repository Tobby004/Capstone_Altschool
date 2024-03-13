// QRCodeGenerationPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Button } from 'components';

const QRCodeGenerationPage = () => {
  const [longURL, setLongURL] = useState('');
  const [qrCode, setQRCode] = useState('');

  const handleGenerateQRCode = async () => {
    try {
      const response = await fetch('https://api.example.com/generate-qr-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalURL: longURL }),
      });

      if (response.ok) {
        const result = await response.json();
        setQRCode(result.qrCodeURL);
      } else {
        console.error('Failed to generate QR code');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Text size="txtGilroySemiBold32">QR Code Generation</Text>
      <Input
        type="text"
        placeholder="Enter your URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleGenerateQRCode}>Generate QR Code</Button>
      {qrCode && (
        <div>
          <p>QR Code:</p>
          <img src={qrCode} alt="QR Code" />
        </div>
      )}
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default QRCodeGenerationPage;
