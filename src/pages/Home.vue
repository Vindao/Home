<template>
  <div class="home pageWrapper">
    <q-card class="pageCard">
      <WelcomeSlogan />
    </q-card>
    <q-card class="pageCard">
      <CTA />
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSlogan from '../components/WelcomeSlogan.vue';
import CTA from '../components/CTA.vue';
// components
import Page from '../components/Layout/Page.vue';
import Picture from '../components/Picture.vue';
export default Vue.extend({
  components: {
    Picture,
    WelcomeSlogan,
    CTA
  }
});
</script>

<style lang="scss" scoped></style>
