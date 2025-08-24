import React, { useState } from 'react';

function LanguageDetector() {
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo: simple keyword-based detection
  function detectLanguage(text) {
    if (/\b(el|la|los|las|un|una|es|y|pero|por)\b/i.test(text)) return 'Spanish';
    if (/\b(le|la|les|un|une|et|mais|pour)\b/i.test(text)) return 'French';
    if (/\b(der|die|das|und|aber|für)\b/i.test(text)) return 'German';
    if (/\b(the|and|but|for|is|are|of|to)\b/i.test(text)) return 'English';
    return 'Unknown';
  }

  const handleDetect = () => {
    setLoading(true);
    setTimeout(() => {
      setLang(detectLanguage(input));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Language Detector</h2>
      <p>Detect the language of your text (demo only).</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleDetect} disabled={loading || !input.trim()}>
          {loading ? 'Detecting...' : 'Detect Language'}
        </button>
      </div>
      {lang && (
        <div style={{marginTop: 16, fontWeight: 500}}>
          Detected Language: {lang}
        </div>
      )}
    </div>
  );
}

export default LanguageDetector;
