const messages = require('./src/language');

export default {
  mode: 'spa',
  target: 'static',
  srcDir: 'src/',
  pageTransition: {
    mode: ''
  },

  /*
   ** Headers of the page
   */
  pwa: {
    meta: {
      name: 'Vindao'
    },
    manifest: {
      name: 'Vindao'
    }
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#e27c00'
  },
  /*
   ** Global CSS
   */
  css: ['~/styles/main.scss', '~/styles/pageTransitions.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazyload.js'],
  /*
   ** Nuxt.js dev-modules
   */

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    'nuxt-i18n',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  i18n: {
    locales: ['en', 'de', 'nl'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: messages
    }
  },
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },
  sitemap: {
    hostname: 'https://www.vindao.io'
  },

  optimizedImages: {
    imagesName: () => 'images/[name]-[contenthash:7].[ext]',
    inlineImageLimit: -1,
    responsive: {
      name: 'images/[name]-[contenthash:7]-[width].[ext]',
      placeholder: true,
      placeholderSize: 50,
      sizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920], // array of image sizes - adjust to your layout needs
      quality: 85 // 85 is default. Tweak this if you need to
    },
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    preventFullImport: true,
    defaultAssets: { icons: 'md' },
    theme: {
      themes: {
        dark: {
          background: '#F2F2F2',
          primary: '#00b566',
          accent: '#e27c00',
          secondary: '#004d40',
          info: '#31ccec',
          warning: '#f2c037',
          error: '#c10015',
          success: '#21ba45'
        },
        light: {
          background: '#F2F2F2',
          primary: '#004d40',
          accent: '#e27c00',
          secondary: '#00b566',
          info: '#31ccec',
          warning: '#f2c037',
          error: '#c10015',
          success: '#21ba45'
        }
      }
    }
  },
  // hooks: {
  //   generate: {
  //     before: generateImages
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    }
  }
};
