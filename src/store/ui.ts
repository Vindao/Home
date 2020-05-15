// types
import { UIStateI } from '@/types/store/UI';
export default {
  namespaced: true,
  state: (): UIStateI => ({
    contactOpen: false
  }),
  getters: {
    contactOpen: (state: UIStateI) => state.contactOpen
  },
  mutations: {
    toggleContact: (state: UIStateI) => {
      state.contactOpen = !state.contactOpen;
    }
  }
};
