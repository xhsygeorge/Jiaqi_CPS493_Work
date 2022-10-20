import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoreView from "../views/StoreView.vue";
import StatisticsView from "../views/StatisticsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      //没有import AboutView from "../views/AboutView.vue"
      //用法和其他的不一样
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
    },
  ],
});

export default router;
