<template>
  <div class="contentWrapper">
    <v-content class="page pb-0 layout">
      <slot />
    </v-content>
    <ContactActionBTN />

    <Footer />
  </div>
  <!-- <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from './Footer.vue';
import ContactActionBTN from './ContactActionBTN.vue';

import { mapRoutes } from '../utils/router';
export default Vue.extend({
  components: {
    Footer,
    ContactActionBTN
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
