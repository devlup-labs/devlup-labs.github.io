import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import Project from "../views/Project";
import Timeline from "../views/Timeline";
import Blog from "../views/Blog";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "DevlUp Labs" }
  },
  {
    path: "/about",
    name: "About",
    component: Home,
    meta: { title: "About Us" }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Project,
    meta: { title: "Projects" }
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
    meta: { title: "Timeline" }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { title: " Our Blog" }
  },
  {
    path: "/team",
    name: "Team",
    component: Profile,
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
