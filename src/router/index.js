import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Templates from "../pages/Templates.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/templates", name: "templates", component: Templates },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
