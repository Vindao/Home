<template>
  <q-header elevated reveal color="secondary">
    <q-toolbar color="secondary" class="justify-between ma-md topBarToolBar">
      <q-toolbar-title class="brandLogo flex items-center">
        <Logo />
      </q-toolbar-title>
      <LanguagePicker />
    </q-toolbar>
    <q-tabs class="topBarTabs">
      <q-route-tab class="topBarTab" to="/" exact name="0" :label="$t('Navigation.home')" />
      <q-route-tab class="topBarTab" to="/services" name="1" :label="$t('Navigation.services')" />
      <q-route-tab class="topBarTab" to="/about" name="2" :label="$t('Navigation.about')" />
    </q-tabs>
  </q-header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
// components
import Logo from './Logo.vue';
import LanguagePicker from './LanguagePicker.vue';
export default Vue.extend({
  name: 'TopBar',
  components: {
    Logo,
    LanguagePicker
  },
  methods: {
    // isSmallLogo() {
    //   console.log(window.innerWidth);
    //   if (window.innerWidth < 500) {
    //     return true;
    //   }
    // }
  }
});
</script>

<style lang="scss" scoped>
.topBarToolBar {
  height: $headerHeight;
  padding: 0 2vw;
  .brandLogo {
    height: 100%;
  }
}
.topBarTabs {
  @media only screen and (max-width: $breakpoint-sm-max) {
    display: none;
  }
  .topBarTab {
    width: 25vw;
  }
}
</style>
