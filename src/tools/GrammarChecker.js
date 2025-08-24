import React, { useState } from 'react';

function GrammarChecker() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function checkGrammar(text) {
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://api.languagetoolplus.com/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `text=${encodeURIComponent(text)}&language=en-US` // You can make language dynamic
      });
      const data = await res.json();
      let corrected = text;
      if (data.matches && data.matches.length > 0) {
        // Apply corrections from end to start
        data.matches.sort((a, b) => b.offset - a.offset).forEach(match => {
          if (match.replacements && match.replacements.length > 0) {
            corrected = corrected.slice(0, match.offset) + match.replacements[0].value + corrected.slice(match.offset + match.length);
          }
        });
      }
      setOutput(corrected);
    } catch (e) {
      setError('Error contacting grammar API.');
      setOutput('');
    }
    setLoading(false);
  }

  const handleCheck = () => {
    checkGrammar(input);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Grammar Checker</h2>
      <p>Check and correct grammar in your text (powered by LanguageTool, free public API, rate-limited).</p>
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

export default GrammarChecker;
