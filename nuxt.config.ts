export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  css: [  
    './assets/main.css'
  ],
  routeRules: {
    '/**' : {robots: true}
  },
  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
  ],
  ssr: true,
  sourcemap: false,
  site: {
    url: 'https://docs.sunoapi.co',
    trailingSlash: false,
    name: 'Suno APi Docs',
  },
  sitemap: {
    enabled: true,
    xsl: false,
    xslTips: false,
    discoverImages: false,
  },
})