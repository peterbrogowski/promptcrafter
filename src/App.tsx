diff --git a//dev/null b/src/App.tsx
index 0000000000000000000000000000000000000000..036733c93a63f8b9d91f012e0e4e0db868a977bb 100644
--- a//dev/null
+++ b/src/App.tsx
@@ -0,0 +1,10 @@
+import React from 'react';
+
+/** Root application component. */
+export function App() {
+  return (
+    <main className="container mx-auto p-4">
+      <h1 className="text-3xl font-bold mb-4">PromptCrafter</h1>
+    </main>
+  );
+}

