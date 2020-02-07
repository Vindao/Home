<template>
  <q-card class="contactModal">
    <form class="contactForm">
      <input type="text" />
    </form>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact'
});
</script>

<style lang="scss" scoped>
.contactModal {
  position: fixed;
  top: calc(#{$headerHeight} + #{$rootMargin});
  left: $rootMargin;
  width: calc(100% - 2 * #{$rootMargin});
  height: calc(
    100vh - (2 * #{$rootMargin} + #{$headerHeight} + #{$bottomNavHeight})
  );
  opacity: 0.75;
  background-color: $dark;
  .contactForm {
    width: 100%;
  }
}
</style>
