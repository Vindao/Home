<template>
  <div class="home">
    <q-card class="pageCard">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Page from '../components/Layout/Page.vue';
export default Vue.extend({
  components: {
    Page
  }
});
</script>
