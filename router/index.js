import Vue from "vue";
import VueRouter from "vue-router";
import GreenPage from "../pages/GreenPage.vue";
import YellowPage from "../pages/YellowPage.vue";
import RedPage from "../pages/RedPage.vue";
import notFoundPage from "../pages/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/green" },
  {
    name: "green",
    component: GreenPage,
    path: "/green",
    props: { color: "green" },
  },
  {
    name: "yellow",
    component: YellowPage,
    path: "/yellow",
    props: { color: "yellow" },
  },
  { name: "red", component: RedPage, path: "/red", props: { color: "red" } },
  { name: "notFound", component: notFoundPage, path: "*" },
];

const router = new VueRouter({
  routes,
});

export default router;
