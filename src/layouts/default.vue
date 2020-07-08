<template>
  <v-app
    :style="{
      background: $vuetify.theme.dark
        ? $vuetify.theme.themes.dark.background
        : $vuetify.theme.themes.light.background,
      overflowX: 'hidden'
    }"
    class="notranslate"
  >
    <Nav />
    <v-main class="page pb-0" style="overflow: hidden;">
      <nuxt keep-alive />
    </v-main>
    <BottomNav />
    <CtaButton />
    <Footer />
    <!-- NOT permanent -->
    <PrivacyPolicy />
    <Impressum />
    <ContactForm />
    <!-- NOT permanent -->
  </v-app>
  <!-- <Loader v-else /> -->
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
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';
import Impressum from '@/components/Impressum.vue';
import ContactForm from '@/components/ContactForm/index.vue';

export default Vue.extend({
  components: {
    Nav,
    Footer,
    BottomNav,
    CtaButton,
    Loader,
    PrivacyPolicy,
    Impressum,
    ContactForm
  },
  // data: () => ({
  //   loading: false
  // }),
  created() {
    // if (process.browser && process.env.NODE_ENV === 'production') {
    //   //@ts-ignore
    //   window.onNuxtReady = e => {
    //     console.log(e);
    //     this.loading = false;
    //   };
    // } else {
    //   this.loading = false;
    // }
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
