import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Error from "@/views/Error.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:pathMatch(.*)",
      name: "error",
      component: Error,
    },
  ],
})

export default router
