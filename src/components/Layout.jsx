import React from "react";
import { Helmet } from "react-helmet-async";
import AdBanner from "./AdBanner.jsx";
import { Link } from "react-router-dom";

export default function Layout({ title, description, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title ? `${title} | Online Tools` : "Online Tools"}</title>
        <meta name="description" content="{description || `${title} - Free tool`} />
        <meta property="og:title" content={title || "Online Tools"} />
        <meta property="og:description" content={description || "Free online tools including AI."} />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="bg-white border-b">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-sky-600">Online Tools</Link>
        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/word-counter" className="hover:underline">Word Counter</Link>
          <Link to="/case-converter" className="hover:underline">Case Converter</Link>
          <Link to="/json-formatter" className="hover:underline">JSON Formatter</Link>
          <Link to="/qr-generator" className="hover:underline">QR Generator</Link>
          <Link to="/ai-summarizer" className="hover:underline">AI Summarizer</Link>
          </div>
        </nav>
      </header>
      
      {/* Top Banner Ad */}
      <div className="max-w-6xl mx-auto px-4 pt-3">
        <AdBanner adSlotId="1234567890" />
      </div>
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Bottom Banner Ad */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <AdBanner adSlotId="1234567890" />
      </div>
      
      <footer className="bg-gray-100 text-center text-sm py-4">
        © {new Date().getFullYear()} Online Tools. All rights reserved.
      </footer>
    </div>
  );
}
