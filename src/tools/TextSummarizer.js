import React, { useState } from 'react';

function TextSummarizer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo summarizer: returns first 2 sentences
  function summarize(text) {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    return sentences.slice(0, 2).join(' ').trim();
  }

  const handleSummarize = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(summarize(input));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Text Summarizer</h2>
      <p>Summarize long text into concise highlights (demo only).</p>
      <textarea
        rows={5}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleSummarize} disabled={loading || !input.trim()}>
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
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

export default TextSummarizer;