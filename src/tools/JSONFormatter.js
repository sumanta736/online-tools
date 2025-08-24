import React, { useState } from 'react';

function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    setError('');
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
    } catch (e) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  return (
    <div className="tool-feature-container">
      <h2>JSON Formatter</h2>
      <p>Format and validate your JSON data.</p>
      <textarea
        rows={6}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste your JSON here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleFormat} disabled={!input.trim()}>Format JSON</button>
      </div>
      {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
      {output && (
        <div style={{marginTop: 16}}>
          <textarea
            rows={6}
            style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8, background: '#f8fafc'}}
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default JSONFormatter;