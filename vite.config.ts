import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Uno from "unocss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), VueJsx({}), Uno()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, ".", "src"),
    },
  },
});
