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
import TopBar from './TopBar.vue';
import BottomNavigation from './BottomNavigation.vue';
import Footer from './Footer.vue';
import PageContent from './Page.vue';
import ContactActionButton from './ContactActionButton.vue';
import ScrollToTopButton from './ScrollToTopButton.vue';

export default Vue.extend({
  name: 'Layout',

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

<style lang="scss" scoped></style>
