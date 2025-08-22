import React from "react";
import AdBanner from "./AdBanner.jsx";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Online Tools</h1>
        <nav className="space-x-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/word-counter" className="hover:underline">Word Counter</Link>
          <Link to="/case-converter" className="hover:underline">Case Converter</Link>
          <Link to="/json-formatter" className="hover:underline">JSON Formatter</Link>
          <Link to="/qr-generator" className="hover:underline">QR Generator</Link>
          <Link to="/ai-summarizer" className="hover:underline">AI Summarizer</Link>
        </nav>
      </header>
      <AdBanner />
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-2">© 2025 Online Tools</footer>
    </div>
  );
}
