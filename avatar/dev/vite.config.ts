// Builds avatar/web.ts (plus daily-js) into one ES module the static site loads:
//   avatar/dist/avatar.js  <-  <script type="module" src="../avatar/dist/avatar.js"></script>
// The site has no bundler, so the built file is committed. Rebuild after any avatar/*.ts change:
//   npm --prefix avatar/dev run build
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const avatarDir = fileURLToPath(new URL("..", import.meta.url));

export default defineConfig({
  root: avatarDir,
  // avatar/*.ts sits outside dev/, so point bare imports at dev/node_modules.
  resolve: {
    alias: { "@daily-co/daily-js": fileURLToPath(new URL("./node_modules/@daily-co/daily-js", import.meta.url)) },
  },
  build: {
    outDir: fileURLToPath(new URL("../dist", import.meta.url)),
    emptyOutDir: true,
    target: "es2022",
    sourcemap: false,
    lib: {
      entry: fileURLToPath(new URL("../web.ts", import.meta.url)),
      formats: ["es"],
      fileName: () => "avatar.js",
    },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
