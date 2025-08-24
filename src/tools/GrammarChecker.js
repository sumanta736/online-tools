import React, { useState } from 'react';

function GrammarChecker() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo: just capitalizes first letter of each sentence
  function checkGrammar(text) {
    return text.replace(/(^|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
  }

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(checkGrammar(input));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Grammar Checker</h2>
      <p>Check and correct grammar in your text (demo only).</p>
      <textarea
        rows={5}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleCheck} disabled={loading || !input.trim()}>
          {loading ? 'Checking...' : 'Check Grammar'}
        </button>
      </div>
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

export default GrammarChecker;
