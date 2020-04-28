import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import Project from "../views/Project";
import Timeline from "../views/Timeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
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
    component: Home
  },
  {
    path: "/team",
    name: "Team",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;
