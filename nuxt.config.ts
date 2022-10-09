import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { routes } from "./Routes";
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  hooks: {
    "pages:extend": (pages) => {
      pages.map((page) => {
        routes.forEach((Routes) => {
          if (Routes.name === page.name) {
            Object.assign(page, { path: Routes.path, file: Routes.file });
          }
        });
      });
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
