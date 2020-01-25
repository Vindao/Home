import { windowIsSmaller } from '../../lib/helpers/user';

export default {
  state: { smallLogo: windowIsSmaller(500) },
  getters: {
    // smallLogo: state => {
    //   console.log(state.smallLogo);
    //   state.smallLogo;
    // }
  },
  actions: {},

  mutations: {}
};
