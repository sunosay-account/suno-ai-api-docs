export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sitemap',
  ],
  css: ['./assets/main.css'],
  ssr: true,
  sourcemap: false,
  site: {
    url: 'https://docs.sunosay.com',
    trailingSlash: false,
    name: 'SunoAPI Docs',
  },
  sitemap: {
    enabled: true,
    xsl: false,
    xslTips: false,
    discoverImages: false,
  },
});
