<template>
  <q-page-container v-touch-swipe.mouse.left.right="swiped" style="padding-bottom: 0">
    <q-page class="pageContainer flex justify-center" id="PageContainerId">
      <div class="contentContainer">
        <transition :name="transitionDirection">
          <router-view class="flex justify-center" />
        </transition>
      </div>
    </q-page>
  </q-page-container>
</template>

<script lang="ts">
import Vue from 'vue';
// helper
import { mapRoutes } from '../../lib/helpers/router';
export default Vue.extend({
  name: 'Page',
  data: () => ({
    transitionDirection: 'forward',
    swipeSpecial: false
  }),
  watch: {
    $route(to, from) {
      const nFrom = mapRoutes(from.path);
      const nTo = mapRoutes(to.path);
      if (!this.swipeSpecial) {
        if (nTo < nFrom) {
          this.transitionDirection = 'backward';
        } else {
          this.transitionDirection = 'forward';
        }
      }
    }
  },
  methods: {
    swiped({ ...info }) {
      const direction = info.direction;
      this.swipeSpecial = false;

      if (direction === 'left') {
        switch (this.$router.currentRoute.path) {
          case '/':
            this.$router.push('/services');
            break;
          case '/services':
            this.$router.push('/about');
            break;
          case '/about':
            this.swipeSpecial = true;
            this.transitionDirection = 'forward';
            this.$router.push('/');
            break;
        }
      } else {
        switch (this.$router.currentRoute.path) {
          case '/':
            this.swipeSpecial = true;
            this.transitionDirection = 'backward';
            this.$router.push('/about');
            break;
          case '/services':
            this.$router.push('/');
            break;
          case '/about':
            this.$router.push('/services');
            break;
        }
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.pageContainer {
  overflow-x: hidden;
  background-color: $lightDark;
  z-index: -2;
  @media only screen and (max-width: $breakpoint-sm-max) {
    margin-bottom: $bottomNavHeight;
  }

  .contentContainer {
    width: 100%;
    padding: $rootMargin;
  }
}
@keyframes PageEnterForward {
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0vw);
    opacity: 1;
  }
}

@keyframes PageEnterBackward {
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0vw);
    opacity: 1;
  }
}

@keyframes PageLeaveBackward {
  0% {
    transform: translateX(0vw);
    opacity: 1;
  }
  100% {
    transform: translateX(100vw);
    opacity: 0;
  }
}

@keyframes PageLeaveForward {
  0% {
    transform: translateX(0vw);
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
  }
}

$timingFunction: cubic-bezier(0.25, 1, 0.5, 1.05);
$transitionDuration: 400ms;

.forward-enter-active {
  animation: PageEnterForward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.backward-enter-active {
  animation: PageEnterBackward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.forward-leave-active {
  position: fixed;

  animation: PageLeaveForward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.backward-leave-active {
  position: fixed;
  left: $rootMargin;
  animation: PageLeaveBackward $transitionDuration;
  animation-timing-function: $timingFunction;
}
</style>
