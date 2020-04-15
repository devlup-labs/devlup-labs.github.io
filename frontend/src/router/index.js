import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Project from "../views/Project.vue";
import Timeline from "../views/Timeline.vue";

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
    component: Project
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  },
  {
    path: "/blog",
    name: "Blog",
    component: Profile
  },
  {
    path: "/team",
    name: "Team",
    component: Profile
  }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;