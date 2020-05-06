<template>
  <Layout />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
// utils
import initLanguage from '@/utils/initLanguage';
// components
import Layout from '~/layouts/index.vue';
export default Vue.extend({
  components: {
    Layout
  },
  methods: {
    ...mapMutations({ changeLanguage: 'Language/changeLanguage' })
  },
  beforeMount() {
    console.log('will mount app after language initialization');
    this.changeLanguage(initLanguage());
  }
});
</script>
