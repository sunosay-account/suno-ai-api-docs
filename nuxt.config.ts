export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  compatibilityDate: '2024-08-12',
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  css: [  
    './assets/main.css'
  ],
  modules: [
    '@nuxtjs/plausible'
  ],
  sourcemap: false,
  ssr: true,
})
