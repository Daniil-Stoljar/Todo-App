import { useState } from "react";

interface TodoFormProps {
  addTask: (text: string) => void;
}

export default function TodoForm({ addTask }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new tast..."
        className="flex-grow border p-2 rounded-1 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={!text.trim()}
        className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Add
      </button>
    </form>
  );
}
