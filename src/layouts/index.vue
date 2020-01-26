<template>
  <q-layout view="lHh lpr fFf">
    <top-bar />
    <bottom-navigation />

    <PageContent />
    <Footer />
    <ActionButtons />
  </q-layout>
</template>
<script lang="ts">
import Vue from 'vue';
// components
import TopBar from '../components/Layout/TopBar.vue';
import BottomNavigation from '../components/Layout/BottomNavigation.vue';
import Footer from '../components/Layout/Footer.vue';
import PageContent from '../components/Layout/Page.vue';
import ActionButtons from '../components/Layout/ActionButtons.vue';

export default Vue.extend({
  name: 'MyLayout',

  components: {
    TopBar,
    BottomNavigation,
    Footer,
    PageContent,
    ActionButtons
  }
});
</script>

<style lang="scss" scoped>
</style>
