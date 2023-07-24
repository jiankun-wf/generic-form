import { createApp } from "vue";
import "./style.css";
import { App } from "./App";
import "element-plus/dist/index.css";
import "virtual:uno.css";
import "uno.css";

import { registerFormComponents } from "./config/build";
import { setupRouter, router } from "./router";

registerFormComponents();

async function setup() {
  const app = createApp(App);

  setupRouter(app);

  await router.isReady();
  app.mount("#app");
}

void setup();
