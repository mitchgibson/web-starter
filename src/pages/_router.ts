import { createRouter, createWebHistory } from "vue-router";
import Routes from "./_routes";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

export { router };
