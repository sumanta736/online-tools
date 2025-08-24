import React, { useState } from 'react';

function Paraphraser() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo paraphrasing: shuffle words (replace with real AI in production)
  function paraphrase(text) {
    const words = text.split(' ');
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words.join(' ');
  }

  const handleParaphrase = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(paraphrase(input));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Paraphraser</h2>
      <p>Rewrite your text in a different way (demo only).</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleParaphrase} disabled={loading || !input.trim()}>
          {loading ? 'Paraphrasing...' : 'Paraphrase'}
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

export default Paraphraser;