<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Layout from './components/Layout/index.vue';
import Loader from './components/Loader.vue';
export default Vue.extend({
  name: 'App',

  data: () => ({
    loading: true
  }),
  components: {
    Loader
  },
  methods: {
    ...mapActions(['initializeUser'])
  },
  mounted() {
    this.initializeUser();
  }
});
</script>
