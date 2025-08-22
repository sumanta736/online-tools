import { Link } from "react-router=dom";

const cards = [
  { to: "/word-counter", title: "Word Counter", desc: "Count words & characters instantly." },
  { to: "/case-converter", title: "Case Converter", desc: "UPPERCASE, lowercase, Title Case." },
  { to: "/json-formatter", title: "JSON Formatter", desc: "Beautify & validate JSON." },
  { to: "/qr-generator", title: "QR Generator", desc: "Create scannable QR codes." },
  { to: "/ai-summarizer", title: "AI Summarizer", desc: "Summarize text (AI/local)." },
];


export default function Home() { 
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Free Online Tools</h1>
      <p className="text-gray-600 mb-6">Handy utilities for text, devs & creators. SEO-optimized and free to use</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) =>(
          <Link key={c.to} to={c.to} className="p-5 bg-white border rounded-2xl hover:shadow transition">
            <div className="font-semibold mb-1">{c.title}</div>
             <div className="text-sm text-gray-600">{c.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
