// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-icon", "@pinia/nuxt",],
  css: ["~~/sass/main.scss"],
  nitro: {
      preset: "firebase"
  },
})