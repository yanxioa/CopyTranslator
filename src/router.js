import Vue from "vue";
import Router from "vue-router";
import Focus from "./views/Focus.vue";
import Contrast from "./views/Contrast.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/focus"
    },
    {
      path: "/focus",
      name: "Focus",
      component: Focus
    },
    {
      path: "/contrast",
      name: "Contrast",
      component: Contrast
    }
  ]
});
