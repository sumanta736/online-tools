import React, { useState } from 'react';
import QRCode from 'qrcode';

function QRGenerator() {
  const [input, setInput] = useState('');
  const [qr, setQR] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setError('');
    try {
      const url = await QRCode.toDataURL(input || ' ');
      setQR(url);
    } catch (e) {
      setError('Failed to generate QR code.');
    }
  };

  return (
    <div className="tool-feature-container">
      <h2>QR Generator</h2>
      <p>Create QR codes for URLs, text, and more.</p>
      <textarea
        rows={3}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Enter text or URL..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleGenerate} disabled={!input.trim()}>Generate QR Code</button>
      </div>
      {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
      {qr && (
        <div style={{marginTop: 18}}>
          <img src={qr} alt="QR Code" style={{maxWidth: 220, background: '#fff', padding: 8, borderRadius: 8}} />
        </div>
      )}
    </div>
  );
}

export default QRGenerator;