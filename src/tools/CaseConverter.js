import React, { useState } from 'react';

function CaseConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toUpper = () => setOutput(input.toUpperCase());
  const toLower = () => setOutput(input.toLowerCase());
  const toTitle = () => setOutput(
    input.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
  );

  return (
    <div className="tool-feature-container">
      <h2>Case Converter</h2>
      <p>Convert your text to UPPERCASE, lowercase, or Title Case.</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12, display: 'flex', gap: 8}}>
        <button className="tool-link" onClick={toUpper}>UPPERCASE</button>
        <button className="tool-link" onClick={toLower}>lowercase</button>
        <button className="tool-link" onClick={toTitle}>Title Case</button>
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

export default CaseConverter;
