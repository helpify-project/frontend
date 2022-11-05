import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DirectoryView from "../views/DirectoryView.vue";
import TopBarComponent from "../components/TopBarComponent.vue";
import VideosView from "../views/VideosView.vue";
import MapView from "../views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        topbar: TopBarComponent,
      },
      props: {
        default: false,
        topbar: {
          title: "Helpify",
        },
      },
    },
    {
      path: "/directory",
      name: "directory",
      components: {
        default: DirectoryView,
        topbar: TopBarComponent,
      },
      props: {
        default: false,
        topbar: {
          title: "Contacts",
        },
      },
    },
    {
      path: "/videos",
      name: "videos",
      components: {
        default: VideosView,
        topbar: TopBarComponent,
      },
      props: {
        default: false,
        topbar: {
          title: "Videos",
        },
      },
    },
    {
      path: "/map",
      name: "map",
      components: {
        default: MapView,
        topbar: TopBarComponent,
      },
      props: {
        default: false,
        topbar: {
          title: "Map",
        },
      },
    },
  ],
});

export default router;
