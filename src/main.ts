// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import Vuex from 'vuex';

import colors from './styles/colors';
import store from './store';

export default (Vue: any, { router, head, isClient, appOptions }: any) => {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'vuetify/dist/vuetify.min.css'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'material-design-icons-iconfont/dist/material-design-icons.css'
  });
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    preventFullImport: true,
    iconfont: 'md',
    theme: {
      themes: {
        dark: colors.dark,
        light: colors.light
      }
    }
  });
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store(store);
};
