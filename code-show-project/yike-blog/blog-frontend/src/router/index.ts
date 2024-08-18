import { createWebHistory, createRouter } from "vue-router";

import IndexView from "../views/IndexView.vue";
import Hello from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: IndexView,
    redirect: "/overview",
    children: [
      {
        path: "overview",
        component: () => import("../views/OverView.vue"),
      },
      {
        path: "hello",
        component: Hello,
      },
    ],
  },
  {
    path: "/world",
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
