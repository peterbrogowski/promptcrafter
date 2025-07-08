```ts
// src/lib/OpenAI.ts
import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat';

const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });

/** Call GPT model and return the engineered prompt text. */
export async function askGPT(messages: ChatCompletionMessageParam[]) {
  const res = await client.chat.completions.create({
    model: import.meta.env.VITE_OPENAI_MODEL ?? 'gpt-4o-mini',
    messages,
    temperature: 0.7,
    max_tokens: 512,
  });
  return res.choices[0].message.content;
}
