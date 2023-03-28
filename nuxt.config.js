export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  //Enabled Vue-Dev Tools to better understand the data
  // vue: {
  //   config: {
  //     productionTip: false,
  //     devtools: true,
  //   },
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Cities Minting Dapp',
    title: 'Cities Minting Dapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Cities Minting Dapp',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://uploads-ssl.webflow.com/635bc8e6332189065849cebf/6377b26625cdcb10364d9fa3_favicon-32.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap',
      },
    ],
  },

  loading: { color: '#FFF' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.scss', '@/assets/css/root.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Configure polyfills:
  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'nuxt-polyfill',
    '@nuxtjs/google-gtag',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    debug: process.env.NODE_ENV !== 'production',
    baseURL: 'https://api.originheroes.com/',
    retries: 3,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  'google-gtag': {
    id: 'G-HFTQVYJNV4',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    defaultAssets: {
      font: {
        family: 'Roboto+Mono',
      },
    },
  },
  toast: {
    position: 'top-center',
    duration: 4000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  },
  generate: {
    fallback: true,
  },
}
