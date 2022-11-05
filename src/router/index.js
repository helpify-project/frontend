import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpView from "../views/HelpView.vue";
import DirectoryView from "../views/DirectoryView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/directory",
      name: "directory",
      component: DirectoryView
    },
    {
      path: "/videos",
      name: "videos",
      component: DirectoryView
    },
    {
      path: "/map",
      name: "map",
      component: DirectoryView
    },
  ],
});

export default router;
