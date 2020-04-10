import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/about",
    name: "About",
    component: Home
  },
  {
    path: "/events",
    name: "Events",
    componet: Profile
  },
  {
    path: "/timeline",
    name: "Timeline",
    componet: Home
  },
  {
    path: "/blog",
    name: "Blog",
    componet: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
