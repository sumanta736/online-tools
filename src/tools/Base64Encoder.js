import React, { useState } from 'react';

function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setOutput('Encoding error.');
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch {
      setOutput('Decoding error.');
    }
  };

  return (
    <div className="tool-feature-container">
      <h2>Base64 Encoder / Decoder</h2>
      <p>Encode or decode text to and from Base64 format.</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12, display: 'flex', gap: 8}}>
        <button className="tool-link" onClick={encode}>Encode</button>
        <button className="tool-link" onClick={decode}>Decode</button>
      </div>
      {output && (
        <div style={{marginTop: 16}}>
          <textarea
            rows={3}
            style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8, background: '#f8fafc'}}
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default Base64Encoder;
