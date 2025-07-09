import React, { useState } from 'react';
import { Input, Button } from 'shadcn-ui';

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
    <form onSubmit={handleSubmit} className="space-y-3 sm:max-w-md mx-auto">
      <Input
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        className="w-full bg-black/70 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-white/50"
        placeholder="Describe your idea"
        aria-label="Concept"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-2 rounded-lg shadow-lg transition-colors hover:from-indigo-400 hover:to-purple-500"
      >
        Craft
      </Button>
    </form>
  );
}
