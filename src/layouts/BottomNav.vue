<template>
  <v-bottom-navigation
    fixed
    class="hidden-sm-and-up"
    height="72"
    app
    background-color="primary"
    dark
    grow
    color="secondary"
  >
    <v-btn to="/">
      <span>{{ text.Navigation.home }}</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/services">
      <span>{{ text.Navigation.services }}</span>
      <v-icon>mdi-storefront</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>{{ text.Navigation.about }}</span>
      <v-icon>mdi-domain</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapGetters({ text: 'Language/text' })
  }
});
</script>

<style></style>
