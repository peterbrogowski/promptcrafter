diff --git a//dev/null b/src/main.tsx
index 0000000000000000000000000000000000000000..fb927c0eb937adf71359fc2f73893484238078c3 100644
--- a//dev/null
+++ b/src/main.tsx
@@ -0,0 +1,21 @@
+import React from 'react';
+import ReactDOM from 'react-dom/client';
+import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
+import { App } from './App';
+
+const queryClient = new QueryClient();
+
+/** Mounts the React app. */
+export function mount() {
+  const el = document.getElementById('root');
+  if (!el) return;
+  ReactDOM.createRoot(el).render(
+    <React.StrictMode>
+      <QueryClientProvider client={queryClient}>
+        <App />
+      </QueryClientProvider>
+    </React.StrictMode>
+  );
+}
+
+mount();

