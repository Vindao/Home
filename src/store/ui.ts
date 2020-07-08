// types
import { UIStateI } from '@/types/store/UI';
export default {
  namespaced: true,
  state: (): UIStateI => ({
    contactOpen: false,
    privacyPolicyOpen: false,
    impressumOpen: false
  }),
  getters: {
    contactOpen: (state: UIStateI) => state.contactOpen
  },
  mutations: {
    toggleContact: (state: UIStateI) => {
      state.contactOpen = !state.contactOpen;
    },
    togglePrivacyPolicy: (state: UIStateI) => {
      state.privacyPolicyOpen = !state.privacyPolicyOpen;
    },
    toggleImpressum: (state: UIStateI) => {
      state.impressumOpen = !state.impressumOpen;
    }
  }
};
