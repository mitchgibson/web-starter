import { type RouteRecordRaw } from "vue-router";
import AccountRoutes from "./account/_routes";

const Routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./Main.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./Login.vue"),
  },
  ...AccountRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./NotFound.vue"),
  },
] as const;

export default Routes;
