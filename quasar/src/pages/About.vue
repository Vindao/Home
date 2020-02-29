<template>
  <div class="about pageWrapper">
   <q-card class="pageCard"><p>test</p>
  </q-card class="pageCard">
  <q-card class="pageCard"><p>test</p>
  </q-card class="pageCard">
  <q-card class="pageCard"><p>test</p>
  </q-card class="pageCard">
  <q-card class="pageCard"><p>test</p>
  </q-card class="pageCard">
  <q-card class="pageCard"><p>test</p>
  </q-card class="pageCard">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Page from '../components/Layout/Page.vue';
export default Vue.extend({
  components: {
    Page
  },
  data: () => ({
    show: false
  })
});
</script>

<style lang="scss" scoped></style>
