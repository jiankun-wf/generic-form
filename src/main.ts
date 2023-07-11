import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";

import { registerFormComponents } from "./config/build";

registerFormComponents();

createApp(App).mount("#app");
