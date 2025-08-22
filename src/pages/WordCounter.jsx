import { useState } from "react"

export default function WordCounter() { 
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Word & Character</h2>
      <textarea
        className="w-full p-3 border rounded-xl
        rows={8}
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 flex-wrap gap-6">
        <div><span className="font-semibold">Words:</span> {words.length}</div>
        <div><span className="font-semibold">Characters:</span> {text.length}</div>
        <div><span className="font-semibold">Sentences:</span> {text.split}</div>
      </div>
    </div>;
  );
}
