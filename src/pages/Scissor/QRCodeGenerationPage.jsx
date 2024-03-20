import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [website, setWebsite] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const generateQRCode = () => {
    if (website) {
      setShowQRCode(true);
    } else {
      alert('Please enter a valid URL');
    }
  };

  const downloadQRCode = () => {
    if (website) {
      const qrCodeDataURL = document.getElementById('qrcode').toDataURL();
      const link = document.createElement('a');
      link.href = qrCodeDataURL;
      link.download = 'QRCode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Please generate a QR code first');
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div className="container" style={{ maxWidth: '400px', padding: '20px', border: '0.5px solid #007bff', borderRadius: '5px' }}>
        <input
          type="text"
          id="website"
          placeholder="Enter website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={generateQRCode}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Generate QR Code
        </button>
        {showQRCode && (
          <div id="qrcode-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            <QRCode id="qrcode" value={website} style={{ margin: '0 auto' }} />
            <br />
            <button
              onClick={downloadQRCode}
              style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
