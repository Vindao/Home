<template>
  <div class="about">
    <q-card class="pageCard">
      <h1>About</h1>
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
  },
  data: () => ({
    show: false
  })
});
</script>

<style lang="scss" scoped></style>
