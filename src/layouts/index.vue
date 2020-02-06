<template>
  <q-layout view="lHh lpr fFf" id="MainAppWrapper">
    <top-bar />
    <bottom-navigation />

    <PageContent />
    <Footer />
    <ContactActionButton />
    <ScrollToTopButton />
  </q-layout>
</template>
<script lang="ts">
import Vue from 'vue';
// components
import TopBar from '../components/Layout/TopBar.vue';
import BottomNavigation from '../components/Layout/BottomNavigation.vue';
import Footer from '../components/Layout/Footer.vue';
import PageContent from '../components/Layout/Page.vue';
import ContactActionButton from '../components/Layout/ContactActionButton.vue';
import ScrollToTopButton from '../components/Layout/ScrollToTopButton.vue';

export default Vue.extend({
  name: 'MyLayout',

  components: {
    TopBar,
    BottomNavigation,
    Footer,
    PageContent,
    ContactActionButton,
    ScrollToTopButton
  }
});
</script>

<style lang="scss" scoped>
#MainAppWrapper {
  scroll-behavior: contain;
}
</style>
