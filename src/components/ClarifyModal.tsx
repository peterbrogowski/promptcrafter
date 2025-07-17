import React, { useState } from 'react';

export interface ClarifyModalProps {
  open: boolean;
  questions: string[];
  onSubmit: (answers: string[]) => void;
}

export function ClarifyModal({ open, questions, onSubmit }: ClarifyModalProps) {
  const [answers, setAnswers] = useState(() => questions.map(() => ''));

  function handleChange(idx: number, value: string) {
    setAnswers((prev) => prev.map((a, i) => (i === idx ? value : a)));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(answers);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 space-y-2 rounded">
        <h2 className="text-xl font-bold">Help us clarify</h2>
        {questions.map((q, i) => (
          <div key={i} className="space-y-1">
            <label className="block text-sm font-medium">{q}</label>
            <input
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}