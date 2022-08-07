const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/about",
        name: "AboutPage",
        component: () => import("pages/About.vue"),
      },
      {
        path: "/videos",
        name: "VideosPage",
        component: () => import("pages/Videos.vue"),
      },
      {
        path: "/discography",
        name: "DiscographyPage",
        component: () => import("pages/Discography.vue"),
      },
      {
        path: "/contact",
        name: "ContactPage",
        component: () => import("pages/Contact.vue"),
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
