import React, { useState } from 'react';

function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [outputUrl, setOutputUrl] = useState('');
  const [quality, setQuality] = useState(0.7);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setOutputUrl('');
    setError('');
  };

  const handleCompress = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              setOutputUrl(URL.createObjectURL(blob));
            } else {
              setError('Compression failed.');
            }
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = () => setError('Invalid image file.');
      img.src = event.target.result;
    };
    reader.onerror = () => setError('Failed to read file.');
    reader.readAsDataURL(file);
  };

  return (
    <div className="tool-feature-container">
      <h2>Image Compressor</h2>
      <p>Compress images online quickly and efficiently.</p>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div style={{marginTop: 12}}>
        <label>Quality: <input type="range" min={0.1} max={1} step={0.01} value={quality} onChange={e => setQuality(Number(e.target.value))} /> {Math.round(quality*100)}%</label>
      </div>
      <button className="tool-link" style={{marginTop: 12}} onClick={handleCompress} disabled={!file}>Compress Image</button>
      {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
      {outputUrl && (
        <div style={{marginTop: 16}}>
          <img src={outputUrl} alt="Compressed" style={{maxWidth: 320, borderRadius: 8, background: '#fff', padding: 8}} />
          <div><a href={outputUrl} download="compressed.jpg" className="tool-link" style={{marginTop: 8, display: 'inline-block'}}>Download</a></div>
        </div>
      )}
    </div>
  );
}

export default ImageCompressor;