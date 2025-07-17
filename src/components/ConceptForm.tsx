
import React, { useState } from 'react';

/** Props for {@link ConceptForm}. */
export interface ConceptFormProps {
  /** Callback with the raw concept when submitted. */
  onSubmit: (concept: string) => void;
}

/**
 * Input form for entering a rough concept.
 */
export function ConceptForm({ onSubmit }: ConceptFormProps) {
  const [concept, setConcept] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(concept.trim());
    setConcept('');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Describe your idea"
        aria-label="Concept"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Craft
      </button>
    </form>
  );
}

