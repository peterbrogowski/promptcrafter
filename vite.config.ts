import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ No test config here — Vite expects a clean object
export default defineConfig({
  plugins: [react()],
});
