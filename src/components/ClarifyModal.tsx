import React, { useState } from 'react';
import { Input, Button } from 'shadcn-ui';

/** Props for {@link ClarifyModal}. */
export interface ClarifyModalProps {
  /** Whether the dialog is open. */
  open: boolean;
  /** Clarifying questions to display. */
  questions: string[];
  /** Called with the answers when submitted. */
  onSubmit: (answers: string[]) => void;
}

/**
 * Modal dialog that gathers answers for clarifying questions.
 */
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in-0">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 text-white p-4 space-y-3 rounded-lg shadow-xl w-11/12 max-w-md"
      >
        <h2 className="text-xl font-bold mb-2">Help us clarify</h2>
        {questions.map((q, i) => (
          <div key={i} className="space-y-1">
            <label className="block text-sm font-medium">{q}</label>
            <Input
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full bg-black/70 border border-white/20 rounded-lg px-3 py-2 text-white"
            />
          </div>
        ))}
        <Button
          type="submit"
          className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 rounded-lg shadow-lg transition-colors hover:from-indigo-400 hover:to-purple-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
