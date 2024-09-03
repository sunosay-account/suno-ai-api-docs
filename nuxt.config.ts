export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
  ],
  css: ['./assets/main.css'],
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
});
