import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /* {
      path: "/",
      name: "home",
      component: HomeView,
    },*/
    {
      path: "/Contador",
      name: "Contador",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/Contador.vue"),
    },
    {
      path: "/lista-de-tareas",
      name: "Lista de Tareas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/ListaDeTareas.vue"),
    },
  ],
});

export default router;
