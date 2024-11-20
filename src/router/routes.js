const routes = [
  {
    path: "/",
    component: () => import("layouts/VuePage.vue"),
    children: [
      {
        path: "",
        component: () => import("src/components/LoginComponent.vue"),
      },

      // { path: "HomePage", component: () => import("pages/HomePage.vue") },
      {
        path: "/page1",
        name: "page1",
        component: () => import("src/pages/PageVue1.vue"),
      },
      // { path: "PageVue2", component: () => import("pages/PageVue2.vue") },
      // { path: "PageVue4", component: () => import("pages/PageVue4.vue") },

      // { path: "PageAffiche", component: () => import("pages/PageAffiche.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
