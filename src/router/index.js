import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Form from "../pages/Form.vue";
import Modal from "../pages/Modal.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/form", name: "form", component: Form },
    { path: "/modal", name: "modal", component: Modal },
  ],
});

export default router;
