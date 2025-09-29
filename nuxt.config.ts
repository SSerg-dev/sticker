import { defineNuxtConfig } from "nuxt/config";

// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  typescript: { strict: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: { preprocessorOptions: { scss: {} } }
  }
})
