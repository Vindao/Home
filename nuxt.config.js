import colors from './src/styles/colors';

export default {
  mode: 'universal',
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
  loading: { color: '#fff' },
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

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify', '@aceforth/nuxt-optimized-images'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  optimizedImages: {
    imagesName: () => 'images/[name]-[contenthash:7].[ext]',
    inlineImageLimit: -1,
    responsive: {
      name: 'images/[name]-[contenthash:7]-[width].[ext]',
      placeholder: true,
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
    },
    webp: {
      quality: 85
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
        dark: colors.dark,
        light: colors.light
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
