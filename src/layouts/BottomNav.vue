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
    <v-btn class="bottomNavLink" to="/">
      <span>{{ text.Navigation.home }}</span>

      <Home
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'home',
          activeDark: $vuetify.theme.dark && current === 'home'
        }"
      />
    </v-btn>

    <v-btn class="bottomNavLink" to="/services">
      <span>{{ text.Navigation.services }}</span>

      <Storefront
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'services',
          activeDark: $vuetify.theme.dark && current === 'services'
        }"
      />
    </v-btn>

    <v-btn class="bottomNavLink" to="/about">
      <span>{{ text.Navigation.about }}</span>
      <Domain
        :class="{
          activeLight: !$vuetify.theme.dark && current === 'about',
          activeDark: $vuetify.theme.dark && current === 'about'
        }"
      />
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
//@ts-ignore
import Home from '~/assets/icons/home.svg';
//@ts-ignore
import Storefront from '~/assets/icons/storefront.svg';
//@ts-ignore
import Domain from '~/assets/icons/domain.svg';
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
  components: {
    Home,
    Storefront,
    Domain
  },
  watch: {
    $route(to) {
      this.current = mapCurrent(to.path);
    }
  },
  mounted() {
    //@ts-ignore
    this.current = mapCurrent(this.$route.path);
  },
  computed: {
    ...mapGetters({ text: 'Language/text' })
  }
});
</script>

<style lang="scss" scoped>
.bottomNavLink {
  svg {
    transform: scale(0.9);
    fill: white;
    &.activeLight {
      fill: #00b566;
    }
    &.activeDark {
      fill: #004d40;
    }
  }
}
</style>
