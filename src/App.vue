<template>
  <div id="q-app">
    <router-view v-if="loaded" />
    <loader v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loader from './components/Loader.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Loader
  },
  data: () => ({
    loaded: true
  }),
  computed: {}
  // created() {
  //   document.addEventListener('readystatechange', () => {
  //     console.log(document.readyState);
  //     if (document.readyState === 'complete') {
  //       this.loaded = true;
  //     }
  //   });
  // }
});
</script>
