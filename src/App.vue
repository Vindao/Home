<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loader from './components/Loader.vue';
import Layout from './components/Layout/index.vue';
export default Vue.extend({
  name: 'App',
  data: () => ({
    loading: true
  }),
  components: {
    Loader,
    Layout
  },
  computed: {},
  created() {
    document.addEventListener('readystatechange', () => {
      console.log(document.readyState);
      if (document.readyState === 'complete') {
        this.loading = false;
      }
    });
  }
});
</script>
