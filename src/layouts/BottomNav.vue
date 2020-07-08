<template>
  <v-bottom-navigation
    fixed
    v-if="$vuetify.breakpoint.xs"
    height="72"
    app
    background-color="primary"
    dark
    grow
    color="secondary"
  >
    <v-btn class="bottomNavLink" to="/">
      <span>{{ $t('Navigation.home') }}</span>
      <v-icon
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'home',
          activeDark: $vuetify.theme.dark && current === 'home'
        }"
        >home</v-icon
      >
    </v-btn>

    <v-btn class="bottomNavLink" to="/services">
      <span>{{ $t('Navigation.services') }}</span>
      <v-icon
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'services',
          activeDark: $vuetify.theme.dark && current === 'services'
        }"
        >storefront</v-icon
      >
    </v-btn>

    <v-btn class="bottomNavLink" to="/about">
      <span>{{ $t('Navigation.about') }}</span>
      <v-icon
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'about',
          activeDark: $vuetify.theme.dark && current === 'about'
        }"
        >domain</v-icon
      >
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';
const mapCurrent = (path: string) => {
  switch (path) {
    case '/':
      return 'home';
      break;
    case '/services':
      return 'services';
      break;
    default:
      return 'about';
  }
};
export default Vue.extend({
  data: () => ({
    current: ''
  }),
  watch: {
    $route(to) {
      this.current = mapCurrent(to.path);
    }
  },
  mounted() {
    //@ts-ignore
    this.current = mapCurrent(this.$route.path);
  }
});
</script>

<style lang="scss" scoped>
.bottomNavLink {
  height: 100% !important;
}
</style>
