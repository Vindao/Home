<template>
  <v-app
    :style="{
      background: $vuetify.theme.dark
        ? $vuetify.theme.themes.dark.background
        : $vuetify.theme.themes.light.background,
      overflowX: 'hidden'
    }"
    v-if="!loading"
    class="notranslate"
  >
    <Nav />
    <v-content class="page pb-0" style="overflow: hidden;">
      <nuxt keep-alive />
    </v-content>
    <BottomNav />
    <CtaButton />
    <Footer />
  </v-app>
  <Loader v-else />
</template>

<script lang="ts">
import Vue from 'vue';
// initializers
import initLanguage from '@/utils/initLanguage';
// components
import Nav from './TopBar/index.vue';
import Footer from './Footer.vue';
import BottomNav from './BottomNav.vue';
import CtaButton from './ContactActionBTN.vue';
import Loader from '@/components/Loader.vue';
export default Vue.extend({
  components: {
    Nav,
    Footer,
    BottomNav,
    CtaButton,
    Loader
  },
  data: () => ({
    loading: true
  }),
  created() {
    if (process.browser) {
      window.onload = () => {
        this.loading = false;
      };
      this.$store.commit('Language/changeLanguage', initLanguage());
    }
  }
});
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  @media only screen and (max-width: 600px) {
    min-height: calc(100vh - 72px);
  }
}
</style>
