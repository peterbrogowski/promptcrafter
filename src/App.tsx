import React from 'react';
import { ConceptForm } from './components/ConceptForm';

/** Root application component. */
export function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-4 flex flex-col items-center justify-start space-y-6">
      <h1 className="text-3xl font-bold mt-4">PromptCrafter</h1>
      <ConceptForm onSubmit={() => {}} />
    </main>
  );
}
