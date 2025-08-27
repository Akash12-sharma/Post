export default defineNuxtConfig({
  compatibilityDate: '2025-08-27',
  srcDir: 'app/', 

  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt',        
  
  ],

  
  css: [
    '~/assets/css/main.css', 
  ],

 
  build: {
   
    transpile: [], 
  },

  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET || 'your-default-api-secret', 
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api', 
    },
  },

  app: {
    head: {
      title: 'My Nuxt 4 App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A Nuxt 4 application' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  devServer: {
    port: 3000,
    host: 'localhost',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: true, 
  },
});