import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import MyActivityView from "../views/MyActivityView.vue";
import FriendsActivityView from "../views/FriendsActivityView.vue";
import PeopleSearchView from "../views/PeopleSearchView.vue";
import User from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //没有import AboutView from "../views/AboutView.vue"
      //用法和其他的不一样
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/myactivity",
      name: "myactivity",
      component: MyActivityView,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
    },
    {
      path: "/friendsactivity",
      name: "friendsactivity",
      component: FriendsActivityView,
    },
    {
      path: "/peoplesearch",
      name: "peoplesearch",
      component: PeopleSearchView,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
  ],
});

export default router;
