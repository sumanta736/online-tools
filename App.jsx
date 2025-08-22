import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WordCounter from "./pages/WordCounter.jsx";
import CaseConverter from "./pages/CaseConverter.jsx";
import JsonFormatter from "./pages/JsonFormatter.jsx";
import QrGenerator from "./pages/QrGenerator.jsx";
import AiSummarizer from "./pages/AiSummarizer.jsx";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/case-converter" element={<CaseConverter />} />
          <Route path="/json-formatter" element={<JsonFormatter />} />
          <Route path="/qr-generator" element={<QrGenerator />} />
          <Route path="/ai-summarizer" element={<AiSummarizer />} />
        </Routes>
      </Layout>
    </Router>
  );
}