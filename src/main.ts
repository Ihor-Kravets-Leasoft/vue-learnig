import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Templates from "./pages/Templates.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/templates", name: "templates", component: Templates },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
