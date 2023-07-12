import { createApp } from "vue";
import "./style.css";
import { App } from "./App";
import "element-plus/dist/index.css";
import "virtual:uno.css";
import "uno.css";

import { registerFormComponents } from "./config/build";

registerFormComponents();

createApp(App).mount("#app");
