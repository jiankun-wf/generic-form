import { Layout } from "@/layout";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/entry/introduce",
  },
  {
    path: "/entry",
    name: "Entry",
    component: Layout,
    meta: {
      title: "入门",
    },
    children: [
      {
        path: "/entry/introduce",
        name: "EntryIntroduce",
        component: () => import("@/views/entry/introduce.tsx"),
        meta: {
          title: "介绍",
        },
      },
    ],
  },
];
