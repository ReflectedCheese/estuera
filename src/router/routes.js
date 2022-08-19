const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") },
      {
        path: "/",
        name: "about",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "/videos",
        name: "Videos",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "/discography",
        name: "DiscographyPage",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "/contact",
        name: "ContactPage",
        component: () => import("src/pages/Home.vue"),
      },
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
