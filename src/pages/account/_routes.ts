import { type RouteRecordRaw } from "vue-router";

const AccountRoutes: RouteRecordRaw[] = [
  {
    path: "/account",
    name: "account-index",
    component: () => import("./Index.vue"),
    children: [
      {
        path: "billing",
        name: "account-billing",
        component: () => import("./Billing.vue"),
      },
      {
        path: "cancel",
        name: "account-cancel",
        component: () => import("./Cancel.vue"),
      },
    ],
  },
] as const;

export default AccountRoutes;
