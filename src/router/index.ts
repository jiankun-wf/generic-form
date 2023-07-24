import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./modules/index";

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export const setupRouter = (app: App) => {
  app.use(router);
};
