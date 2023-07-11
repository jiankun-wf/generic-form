import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
// import BuilTypes from "./build/types";

export default defineConfig(({ command }) => ({
  plugins: [vue(), VueJsx({})],
  build: {
    lib: {
      entry: "lib/index.ts",
      fileName(format) {
        return `index.${format}.js`;
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
      plugins: [
        false &&
          visualizer({
            filename: "./node_modules/.cache/visualizer/stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
      ],
    },
    outDir: "dist",
  },
}));
