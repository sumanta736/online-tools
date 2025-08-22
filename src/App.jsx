import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx;
import Home from "./pages/Home.jsx";
import WordCounter from "./pages/WordCounter.jsx";
import CaseConverter from "./pages/CaseConverter.jsx";
import JsonFormatter from "./pages/JsonFormatter.jsx";
import QrGenerator from "./pages/QrGenerator.jsx";
import AiSummarizer from "./pages/AiSummarizer.jsx";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout title="Free Online Tools"><Home /></Layout>} />
          <Route path="/word-counter" element={<Layout title="Word Counter" description="Count words & characters online."><WordCounter /></Layout>} />
          <Route path="/case-converter" element={<Layout title="Case Converter" description="UPPERCASE, lowercase, Title Case converter."><CaseConverter /></Layout>} />
          <Route path="/json-formatter" element={<Layout title="JSON Formatter" description="Beautify & validate JSON online."><JsonFormatter /></Layout>} />
          <Route path="/qr-generator" element={<Layout title="QR Code Generator" description="Create QR codes instantly."><QrGenerator /></Layout>} />
          <Route path="/ai-summarizer" element={<Layout title="AI Summarizer" description="Summarize text with AI or local algorithm."><AiSummarizer /></Layout>} />
          <Route path="*" element={<Layout title="Not Found"><div className="p-6 text-center">Page not found. <Link classname="text-blue-600" to="/">Go Home</Link></div></Layout>}
        </Routes>
    </Router>
  );
}
