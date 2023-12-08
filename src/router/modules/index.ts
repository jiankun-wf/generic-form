import { Layout } from "@/layout";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/entry/introduce",
    meta: {
      hidden: true,
    },
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
  {
    path: "/quick-start",
    name: "QuickStart",
    component: Layout,
    meta: {
      title: "快速开始",
    },
    children: [
      {
        path: "/quick-start/setup",
        name: "QuickStartSetip",
        component: () => import("@/views/quick-start/setup.tsx"),
        meta: {
          title: "安装",
        },
      },
      {
        path: "/quick-start/basic-use",
        name: "QuickStartBasicUse",
        component: () => import("@/views/quick-start/basic-use.tsx"),
        meta: {
          title: "基本使用示例",
        },
      },
    ],
  },
];
