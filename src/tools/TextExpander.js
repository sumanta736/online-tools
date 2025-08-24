import React, { useState } from 'react';

function TextExpander() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // No free public API for text expansion, so keep demo logic
  function expandText(text) {
    if (!text.trim()) return '';
    return text + ' ... In other words, ' + text.split(' ').map(w => w).join(' ') + '. This means: ' + text;
  }

  const handleExpand = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      setOutput(expandText(input));
      setLoading(false);
    }, 700);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Text Expander</h2>
      <p>Expand short text into a longer, more detailed version (no free public AI API available, using demo logic).</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleExpand} disabled={loading || !input.trim()}>
          {loading ? 'Expanding...' : 'Expand Text'}
        </button>
      </div>
      {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
      {output && (
        <div style={{marginTop: 16}}>
          <textarea
            rows={4}
            style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8, background: '#f8fafc'}}
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default TextExpander;
