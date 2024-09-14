export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  css: ['./assets/main.css'],
  ssr: true,
  sourcemap: false,
  site: {
    url: 'https://docs.sunoapi.co',
    trailingSlash: false,
    name: 'SunoAPI Docs',
  },
  app: {
    head: {
      script: [
        {
          hid: 'gtag',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11475633734');
          `,
          type: 'text/javascript',
          async: true,
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-11475633734',
          async: true,
        },
      ],
    },
  },
  sitemap: {
    enabled: true,
    xsl: false,
    xslTips: false,
    discoverImages: false,
  },
});
