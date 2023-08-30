import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { title: "DevlUp Labs" }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutUs.vue"),
    meta: { title: "About Us" }
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Project"),
    meta: { title: "Projects" }
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import("../views/Timeline"),
    meta: { title: "Timeline" }
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog"),
    meta: { title: " Our Blog" }
  },
  {
    path: "/videos",
    name: "Videos",
    component: () => import("../views/Videos"),
    meta: { title: " Videos" }
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: () => import("../views/Podcast"),
    meta: { title: "Podcast" }
  },
  {
    path: "/current_team",
    name: "current_team",
    component: () => import("../views/CurrentTeam"), // Replace "../views/Profile" with the path to the component for the current team
    meta: { title: "Current Team" }
  },
  {
    path: "/WoC",
    name: "WoC",
    component: () => import("../views/WoC"),
    meta: { title: "WoC" }
  },
  {
    path: "/alumni_team",
    name: "alumni_team",
    component: () => import("../views/AlumniTeam"), // Add the route for the AlumniTeam component
    meta: { title: "Alumni Team" }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
