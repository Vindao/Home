<template>
  <div class="home">
    <q-card class="pageCard">
      <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
      <Picture imgLink="https://yingeder.sirv.com/Images/VW%20Beetle.jpg" alt="test" />
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Page from '../components/Layout/Page.vue';
import Picture from '../components/Picture.vue';
export default Vue.extend({
  components: {
    Picture
  }
});
</script>
