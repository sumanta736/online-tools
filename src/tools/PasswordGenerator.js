import React, { useState } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: true
  });

  function generatePassword() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = '';
    if (options.upper) chars += upper;
    if (options.lower) chars += lower;
    if (options.number) chars += number;
    if (options.symbol) chars += symbol;
    if (!chars) return '';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  }

  const handleGenerate = () => {
    setPassword(generatePassword());
  };

  const handleOptionChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  return (
    <div className="tool-feature-container">
      <h2>Password Generator</h2>
      <p>Generate strong, secure passwords instantly.</p>
      <div style={{marginBottom: 12}}>
        <label>Length: <input type="number" min={4} max={64} value={length} onChange={e => setLength(Number(e.target.value))} style={{width: 60, marginLeft: 6}} /></label>
      </div>
      <div style={{marginBottom: 12, display: 'flex', gap: 12, justifyContent: 'center'}}>
        <label><input type="checkbox" name="upper" checked={options.upper} onChange={handleOptionChange}/> Uppercase</label>
        <label><input type="checkbox" name="lower" checked={options.lower} onChange={handleOptionChange}/> Lowercase</label>
        <label><input type="checkbox" name="number" checked={options.number} onChange={handleOptionChange}/> Numbers</label>
        <label><input type="checkbox" name="symbol" checked={options.symbol} onChange={handleOptionChange}/> Symbols</label>
      </div>
      <button className="tool-link" onClick={handleGenerate}>Generate Password</button>
      {password && (
        <div style={{marginTop: 16}}>
          <input style={{width: '100%', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ddd', padding: 8, background: '#f8fafc'}} value={password} readOnly />
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;