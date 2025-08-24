import React, { useState } from 'react';
import LanguageDetect from 'languagedetect';

function LanguageDetector() {
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('');
  const [loading, setLoading] = useState(false);
  const lngDetector = new LanguageDetect();

  const handleDetect = () => {
    setLoading(true);
    setTimeout(() => {
      const result = lngDetector.detect(input, 1);
      setLang(result.length ? result[0][0] : 'Unknown');
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Language Detector</h2>
      <p>Detect the language of your text (powered by languagedetect).</p>
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
