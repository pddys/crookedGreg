// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  // css: ["@/assets/sass/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/global.scss";',
        },
      },
    },
  },
  image: {
    format: 'avif',
    dir: 'assets/images',
    provider: 'netlify',
    netlify: {
      baseURl: 'https://jazzy-halva-607479.netlify.app'
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  build: {
    transpile: ['gsap'],
  },

})
