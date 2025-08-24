import React, { useState } from 'react';

function PlagiarismChecker() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  // Demo: random plagiarism score
  const checkPlagiarism = () => {
    setLoading(true);
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 100));
      setLoading(false);
    }, 800);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Plagiarism Checker</h2>
      <p>Check if your text is original (demo only).</p>
      <textarea
        rows={5}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={checkPlagiarism} disabled={loading || !input.trim()}>
          {loading ? 'Checking...' : 'Check Plagiarism'}
        </button>
      </div>
      {score !== null && (
        <div style={{marginTop: 16, fontWeight: 500}}>
          Plagiarism Score: {score}% {score > 50 ? '⚠️' : '✅'}
        </div>
      )}
    </div>
  );
}

export default PlagiarismChecker;
