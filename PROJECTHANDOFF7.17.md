# 🛠️ Project Handoff: PromptCrafter

## ✅ Current Status

- App runs at `localhost:5173`
- Renders `PromptCrafter` title
- Tailwind styles working
- `pnpm install` + `pnpm dev --host` works
- API key removed from repo history

## 🔧 Tasks for Codex

- Build `<ConceptForm>`: textarea + submit button
- Ask up to 3 clarification questions if needed
- Build `<ClarifyModal>` with inputs for answers
- On submit, generate prompt (mock OpenAI for now)
- Show copy-to-clipboard button with “Prompt copied!” toast
- Use shadcn/ui for all components

## 🔗 Entry Point

```tsx
// public/index.html → <div id="root"></div>
// src/main.tsx → mount(App)