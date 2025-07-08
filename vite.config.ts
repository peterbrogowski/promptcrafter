diff --git a//dev/null b/vite.config.ts
index 0000000000000000000000000000000000000000..80da60c0fa70ab77a92fc330a3371adca36dcb73 100644
--- a//dev/null
+++ b/vite.config.ts
@@ -0,0 +1,9 @@
+import { defineConfig } from 'vite';
+import react from '@vitejs/plugin-react';
+
+export default defineConfig({
+  plugins: [react()],
+  test: {
+    environment: 'jsdom'
+  }
+});

