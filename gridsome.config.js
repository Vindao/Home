// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Vindao',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // or array of paths
        resources: ['./src/styles/variables.scss']
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Vindao',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        shortName: 'Vindao',
        themeColor: '#00b566',
        backgroundColor: '#002620',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#00b566'
      }
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          cacheName: 'nf-v1',
          routes: [
            '/',
            /\.(js|css|html|json|woff|eot|woff2|ttf|png|jpg|jpeg|svg)/ // means "every JS, CSS, and PNG images"
          ]
        }
      }
    },
    // {
    //   use: 'gridsome-plugin-purgecss',
    //   // default options, the following will be included if you don't provide anything
    //   options: {
    //     content: [
    //       './src/**/*.vue',
    //       './src/**/*.js',
    //       './src/**/*.jsx',
    //       './src/**/*.pug',
    //       './src/**/*.md'
    //     ],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   }
    // },
    {
      use: 'gridsome-plugin-typescript'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'uploads/cards/**/*.md',
        typeName: 'Card',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
};
