<template>
  <div class="flex justify-center" v-show="toTopBtn">
    <q-btn
      fab
      color="secondary"
      icon="arrow_forward_ios"
      class="scrollToTopBtn transition-show"
      @click="toTop"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { scroll, debounce } from 'quasar';
const { getScrollPosition, getScrollTarget, getScrollHeight } = scroll;
export default Vue.extend({
  name: 'ActionButtons',
  data: () => ({
    toTopBtn: false
  }),

  methods: {
    toTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
});
</script>

<style lang="scss" scoped>
@keyframes scrollTopBtnAnim {
  0% {
    height: 2em;
    opacity: 0;
  }
  100% {
    height: 3em;

    opacity: 1;
  }
}

.scrollToTopBtn {
  position: fixed;
  bottom: 2 * $rootMargin;
  transform: rotateZ(-90deg) !important;
  @media only screen and (max-width: $breakpoint-sm-max) {
    margin-bottom: $bottomNavHeight;
  }
}

.scrollTopBtn-enter-active {
  animation: scrollTopBtnAnim 0.5s;
}

.scrollTopBtn-leave-active {
  animation: scrollTopBtnAnim 0.5s reverse;
}
</style>
