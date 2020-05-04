// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css';

import colors from './styles/colors';
import store from './store';

export default (Vue: any, { router, head, isClient, appOptions }: any) => {
  // Set default layout as a global component
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    preventFullImport: true,
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
