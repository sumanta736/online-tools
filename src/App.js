import React from 'react';
import './App.css';
import ImageCompressor from './tools/ImageCompressor';
import PasswordGenerator from './tools/PasswordGenerator';
import QRGenerator from './tools/QRGenerator';
import JSONFormatter from './tools/JSONFormatter';
import TextSummarizer from './tools/TextSummarizer';
import SentimentAnalyzer from './tools/SentimentAnalyzer';
import Paraphraser from './tools/Paraphraser';
import WordCounter from './tools/WordCounter';
import CaseConverter from './tools/CaseConverter';
import Base64Encoder from './tools/Base64Encoder';
import URLDecoder from './tools/URLDecoder';
import RemoveDuplicates from './tools/RemoveDuplicates';
import GrammarChecker from './tools/GrammarChecker';
import PlagiarismChecker from './tools/PlagiarismChecker';
import TextExpander from './tools/TextExpander';
import LanguageDetector from './tools/LanguageDetector';

const tools = [
  {
    name: 'Image Compressor',
    description: 'Compress images online quickly and efficiently.',
    link: '#image-compressor',
    icon: '🖼️',
  },
  {
    name: 'Password Generator',
    description: 'Generate strong, secure passwords instantly.',
    link: '#password-generator',
    icon: '🔒',
  },
  {
    name: 'QR Generator',
    description: 'Create QR codes for URLs, text, and more.',
    link: '#qr-generator',
    icon: '🔳',
  },
  {
    name: 'JSON Formatter',
    description: 'Format and validate your JSON data.',
    link: '#json-formatter',
    icon: '🧩',
  },
  {
    name: 'AI Text Summarizer',
    description: 'Summarize long text into concise highlights using AI.',
    link: '#ai-text-summarizer',
    icon: '📝',
  },
  {
    name: 'AI Sentiment Analyzer',
    description: 'Detect the sentiment of your text using AI.',
    link: '#ai-sentiment-analyzer',
    icon: '💡',
  },
  {
    name: 'AI Paraphraser',
    description: 'Rewrite your text in a different way using AI.',
    link: '#ai-paraphraser',
    icon: '🔄',
  },
  {
    name: 'Word & Character Counter',
    description: 'Count words and characters in your text instantly.',
    link: '#word-counter',
    icon: '🔢',
  },
  {
    name: 'Case Converter',
    description: 'Convert your text to UPPERCASE, lowercase, or Title Case.',
    link: '#case-converter',
    icon: '🔠',
  },
  {
    name: 'Base64 Encoder / Decoder',
    description: 'Encode or decode text to and from Base64 format.',
    link: '#base64-encoder',
    icon: '🧬',
  },
  {
    name: 'URL Encoder / Decoder',
    description: 'Encode or decode URLs for safe transmission.',
    link: '#url-encoder',
    icon: '🌐',
  },
  {
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from your text easily.',
    link: '#remove-duplicates',
    icon: '🧹',
  },
  {
    name: 'AI Grammar Checker',
    description: 'Check and correct grammar in your text using AI.',
    link: '#ai-grammar-checker',
    icon: '✍️',
  },
  {
    name: 'AI Plagiarism Checker',
    description: 'Check if your text is original using AI.',
    link: '#ai-plagiarism-checker',
    icon: '📚',
  },
  {
    name: 'AI Text Expander',
    description: 'Expand short text into a longer, more detailed version using AI.',
    link: '#ai-text-expander',
    icon: '🔎',
  },
  {
    name: 'AI Language Detector',
    description: 'Detect the language of your text using AI.',
    link: '#ai-language-detector',
    icon: '🌍',
  },
];

function App() {
  const [route, setRoute] = React.useState('home');

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    setRoute(hash || 'home');
    const onHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      setRoute(newHash || 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === 'image-compressor') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <ImageCompressor />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'password-generator') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <PasswordGenerator />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'qr-generator') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <QRGenerator />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'json-formatter') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <JSONFormatter />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-text-summarizer') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <TextSummarizer />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-sentiment-analyzer') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <SentimentAnalyzer />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-paraphraser') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <Paraphraser />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'word-counter') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <WordCounter />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'case-converter') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <CaseConverter />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'base64-encoder') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <Base64Encoder />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'url-encoder') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <URLDecoder />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'remove-duplicates') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <RemoveDuplicates />
        <footer className="footer-ad-container">
          {/* Insert your Google AdSense code or ad unit here */}
          {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-grammar-checker') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <GrammarChecker />
        <footer className="footer-ad-container"></footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-plagiarism-checker') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <PlagiarismChecker />
        <footer className="footer-ad-container"></footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-text-expander') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <TextExpander />
        <footer className="footer-ad-container"></footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  if (route === 'ai-language-detector') {
    return (
      <main className="main-container">
        <header className="hero">
          <h1>Online Tools</h1>
          <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
          <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
        </header>
        <div className="ad-container"></div>
        <LanguageDetector />
        <footer className="footer-ad-container"></footer>
        <footer className="footer">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
            <span> | </span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="main-container">
      <header className="hero">
        <h1>Online Tools</h1>
        <div className="sub-header">A collection of free, fast & smart utilities for everyone</div>
        <p className="subtitle">Free, fast, and easy-to-use web utilities for everyone.</p>
      </header>
      {/* AdSense Ad Unit Placeholder */}
      <div className="ad-container">
        {/* Insert your Google AdSense code below */}
        {/* <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins> */}
      </div>
      <section className="tools-section">
        {tools.map((tool) => (
          <div className="tool-card" key={tool.name}>
            <div className="tool-icon">{tool.icon}</div>
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <a href={tool.link} className="tool-link">Open</a>
          </div>
        ))}
      </section>
      <footer className="footer-ad-container">
        {/* Insert your Google AdSense code or ad unit here */}
        {/* <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins> */}
      </footer>
      <footer className="footer">
        <div className="footer-content">
          &copy; {new Date().getFullYear()} Online Tools. All rights reserved.
          <span> | </span>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="javascript:void(0)" tabIndex="-1" aria-disabled="true" className="footer-link-disabled">Contact</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
