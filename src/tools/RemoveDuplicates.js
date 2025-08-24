import React, { useState } from 'react';

function RemoveDuplicates() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRemove = () => {
    const lines = input.split(/\r?\n/);
    const unique = Array.from(new Set(lines));
    setOutput(unique.join('\n'));
  };

  return (
    <div className="tool-feature-container">
      <h2>Remove Duplicate Lines</h2>
      <p>Remove duplicate lines from your text easily.</p>
      <textarea
        rows={5}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleRemove} disabled={!input.trim()}>Remove Duplicates</button>
      </div>
      {output && (
        <div style={{marginTop: 16}}>
          <textarea
            rows={5}
            style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8, background: '#f8fafc'}}
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default RemoveDuplicates;