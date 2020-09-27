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
    path: "/team",
    name: "Team",
    component: () => import("../views/Profile"),
    meta: { title: "Team" }
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
