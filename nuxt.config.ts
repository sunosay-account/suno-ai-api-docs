export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  css: ['./assets/main.css'],
  ssr: true,
  sourcemap: false,
  site: {
    url: 'https://docs.sunosay.com',
    trailingSlash: false,
    name: 'SunoAPI Docs',
  },
  app: {
    title: 'SunoAPI Suno API Documentation', // 设置全局默认标题
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to the SunoAPI documentation, your best starting point for understanding and utilizing our music and lyric generation interfaces. Here, you will find detailed usage guides, sample code, and FAQs to help you get started easily and make the most of our API features.' }, // 设置全局默认描述
        { hid: 'charset', charset: 'utf-8' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
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
