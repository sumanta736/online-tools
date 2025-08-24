import React, { useState } from 'react';

function WordCounter() {
  const [input, setInput] = useState('');
  const words = input.trim() ? input.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = input.length;

  return (
    <div className="tool-feature-container">
      <h2>Word & Character Counter</h2>
      <p>Count words and characters in your text instantly.</p>
      <textarea
        rows={5}
        style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8}}
        placeholder="Paste or type your text here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{marginTop: 16, fontWeight: 500}}>
        Words: {words} &nbsp; | &nbsp; Characters: {chars}
      </div>
    </div>
  );
}

export default WordCounter;
