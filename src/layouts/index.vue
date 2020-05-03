<template>
  <v-app
    :style="{
      background: $vuetify.theme.dark
        ? $vuetify.theme.themes.dark.background
        : $vuetify.theme.themes.light.background,
      overflowX: 'hidden'
    }"
    class="app"
  >
    <v-content class="page pb-0 layout">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </v-content>
    <Nav />

    <ContactActionBTN />

    <Footer />
    <BottomNav />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './TopBar/index.vue';
import BottomNav from './BottomNav.vue';
import Footer from './Footer.vue';
import ContactActionBTN from './ContactActionBTN.vue';
import { mapRoutes } from '@/utils/router';
export default Vue.extend({
  components: {
    Nav,
    Footer,
    ContactActionBTN,
    BottomNav
  },
  data: () => ({
    transitionName: 'forward'
  }),
  watch: {
    $route: function(to, from) {
      const toN = mapRoutes(to.path);
      const fromN = mapRoutes(from.path);

      this.transitionName = toN > fromN ? 'forward' : 'backward';
    }
  }
});
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  @media only screen and (max-width: 600px) {
    min-height: calc(100vh - 72px);
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
  position: absolute;
  animation: PageLeaveForward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.backward-leave-active {
  position: absolute;

  animation: PageLeaveBackward $transitionDuration;
  animation-timing-function: $timingFunction;
}
</style>
