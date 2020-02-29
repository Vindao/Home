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
import { mapGetters } from 'vuex';
// components
import WelcomeSlogan from '../components/WelcomeSlogan.vue';
import CTA from '../components/CTA.vue';
export default Vue.extend({
  components: {
    WelcomeSlogan,
    CTA
  }
});
</script>

<style lang="scss" scoped></style>
