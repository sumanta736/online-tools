import React, { useState } from 'react';

function SentimentAnalyzer() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simple client-side sentiment analysis (demo only)
  function analyzeSentiment(text) {
    const positiveWords = ['good', 'great', 'happy', 'love', 'excellent', 'awesome', 'fantastic', 'positive', 'fortunate', 'correct', 'super'];
    const negativeWords = ['bad', 'sad', 'hate', 'terrible', 'awful', 'horrible', 'negative', 'unfortunate', 'wrong', 'poor'];
    let score = 0;
    const words = text.toLowerCase().split(/\W+/);
    words.forEach(word => {
      if (positiveWords.includes(word)) score++;
      if (negativeWords.includes(word)) score--;
    });
    if (score > 0) return { label: 'Positive', emoji: '😊' };
    if (score < 0) return { label: 'Negative', emoji: '😞' };
    return { label: 'Neutral', emoji: '😐' };
  }

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(analyzeSentiment(input));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-feature-container">
      <h2>AI Sentiment Analyzer</h2>
      <p>Detect the sentiment of your text instantly.</p>
      <textarea
        rows={4}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 12}}>
        <button className="tool-link" onClick={handleAnalyze} disabled={loading || !input.trim()}>
          {loading ? 'Analyzing...' : 'Analyze Sentiment'}
        </button>
      </div>
      {result && (
        <div style={{marginTop: 18, fontSize: '1.2rem', fontWeight: 600}}>
          Sentiment: {result.label} {result.emoji}
        </div>
      )}
    </div>
  );
}

export default SentimentAnalyzer;
