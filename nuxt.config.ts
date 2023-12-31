// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    highlight: {
      theme: {
        default: "material-theme-palenight",
        dark: "github-dark",
      },
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
