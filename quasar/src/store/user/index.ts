import { initializeUser } from '../../lib/helpers/store/initializer';
import { UserStateI } from '../../types/Store/User';

export default {
  state: { user: initializeUser() },
  getters: {
    user: (state: UserStateI) => state.user,
    loggedIn: (state: UserStateI) => {
      if (state.user) {
        return state.user.loggedIn;
      }
    }
  },
  actions: {},

  mutations: {}
};
