<template>
  <q-header elevated reveal color="secondary">
    <q-toolbar color="secondary" class="justify-between ma-md topBarToolBar">
      <q-toolbar-title class="brandLogo flex items-center">
        <Logo />
      </q-toolbar-title>
      <Settings />
    </q-toolbar>
    <q-tabs class="topBarTabs">
      <q-route-tab class="topBarTab" to="/" exact name="0" :label="text.Navigation.home" />
      <q-route-tab class="topBarTab" to="/services" name="1" :label="text.Navigation.services" />
      <q-route-tab class="topBarTab" to="/about" name="2" :label="text.Navigation.about" />
    </q-tabs>
  </q-header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
// components
import Logo from './Logo.vue';
import Settings from './Settings/index.vue';
export default Vue.extend({
  name: 'TopBar',
  components: {
    Logo,
    Settings
  },

  computed: {
    ...mapGetters(['text'])
  }
});
</script>

<style lang="scss" scoped>
.topBarToolBar {
  height: $headerHeight;
  min-height: $headerMinHeight;
  padding: 0 2vw;
  z-index: 1;
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
