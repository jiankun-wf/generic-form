import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), VueJsx({})],
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: "lib/index.ts",
      fileName(format) {
        return `${format}.js`;
      },
      name: "generic-form",
      // formats: ["cjs", "es", "umd"],
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
          "naive-ui": "naive-ui",
        },
      },
    },
    outDir: "npmrelease/dist",
  },
});
