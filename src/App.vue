<template>
  <div id="q-app">
    <Layout />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './components/Layout/index.vue';
import Loader from './components/Loader.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Layout
  },
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
