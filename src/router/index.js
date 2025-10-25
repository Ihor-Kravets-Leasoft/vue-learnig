import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Form from "../pages/Form.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/form", name: "form", component: Form },
  ],
});

export default router;
