<template>
  <q-footer>
    <q-toolbar class="flex justify-between bottomNav">
      <q-tabs
        indicator-color="transparent"
        active-color="secondary"
        style="width:100%;"
      >
        <q-route-tab
          class="bottomNavTab"
          to="/"
          exact
          name="0"
          icon="home"
          :label="language.Navigation.home"
        />
        <q-route-tab
          class="bottomNavTab"
          to="/services"
          name="1"
          icon="storefront"
          :label="language.Navigation.services"
        />
        <q-route-tab
          class="bottomNavTab"
          to="/about"
          name="2"
          icon="business"
          :label="language.Navigation.about"
        />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  name: 'BottomNavigation',
  computed: {
    ...mapGetters(['language'])
  }
});
</script>
<style lang="scss" scoped>
.bottomNav {
  padding: 0 $rootMargin;
  height: $bottomNavHeight;
  min-height: $bottomNavMinHeight;
  @media only screen and (min-width: $breakpoint-sm-max) {
    display: none;
  }
  .bottomNavTab {
    width: 33%;
  }
}
</style>
