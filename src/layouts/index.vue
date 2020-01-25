<template>
  <q-layout view="lHh lpr fFf">
    <top-bar />
    <q-footer class="bottomNav">
      <bottom-navigation />
    </q-footer>
    <q-page-container
      v-touch-swipe.mouse.left.right="swiped"
      style="overflow-x: hidden; min-height: 100vh;"
    >
      <transition appear appear-active-class="initialRender" :name="transitionName">
        <router-view class="contentContainer flex justify-center" />
      </transition>
    </q-page-container>
    <div v-scroll="scrolled" class="flex justify-center" v-show="scrollTopBtn">
      <q-btn
        fab
        color="secondary"
        icon="arrow_forward_ios"
        class="scrollToTopBtn transition-show"
        @click="toTop"
      />
    </div>

    <div class="contactActionBtn">
      <q-btn color="accent" class="shadow-15" size="24px" round icon="message" />
    </div>
  </q-layout>
</template>
<script lang="ts">
import Vue from 'vue';
// components
import TopBar from '../components/Layout/TopBar.vue';
import BottomNavigation from '../components/Layout/BottomNavigation.vue';

const mapRoutes = (route: string): number => {
  switch (route) {
    case '/':
      return 0;
      break;
    case '/services':
      return 1;
      break;
    default:
      return 2;
  }
};
export default Vue.extend({
  name: 'MyLayout',
  components: {
    TopBar,
    BottomNavigation
  },
  data: () => ({
    transitionName: 'forward',
    scrollTopBtn: false
  }),
  watch: {
    $route(to, from) {
      if (mapRoutes(to.path) < mapRoutes(from.path)) {
        this.transitionName = 'backward';
      } else {
        this.transitionName = 'forward';
      }
    }
  },
  methods: {
    swiped({ ...info }) {
      const direction = info.direction;

      if (direction === 'left') {
        this.goForward();
      } else {
        this.goBack();
      }
    },
    scrolled() {
      if (typeof window === 'undefined') return;
      //@ts-ignore
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.scrollTopBtn = top > 20;
    },
    toTop() {
      window.scroll(0, 0);
      console.log(window.scrollY);

      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    goBack() {
      this.transitionName = 'backward';
      switch (this.$router.currentRoute.path) {
        case '/services':
          this.$router.push('/');
          break;
        case '/about':
          this.$router.push('/services');
          break;
      }
    },
    goForward() {
      this.transitionName = 'forward';

      switch (this.$router.currentRoute.path) {
        case '/':
          this.$router.push('/services');
          break;
        case '/services':
          this.$router.push('/about');
          break;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@keyframes PageEnterForward {
  0% {
    transform: translateX(100vw) scale(1);
  }
  10% {
    transform: translateX(100vw) scale(0.9);
  }
  90% {
    transform: translateX(0vw) scale(0.9);
  }
  100% {
    transform: translateX(0vw) scale(1);
  }
}

@keyframes PageEnterBackward {
  0% {
    transform: translateX(-100vw) scale(1);
  }
  10% {
    transform: translateX(-100vw) scale(0.9);
  }
  90% {
    transform: translateX(0vw) scale(0.9);
  }
  100% {
    transform: translateX(0vw) scale(1);
  }
}
@keyframes PageLeaveForward {
  0% {
    transform: translateX(0vw) scale(1);
  }
  10% {
    transform: translateX(0vw) scale(0.9);
  }
  100% {
    transform: translateX(-100vw);
    display: none;
  }
}

@keyframes PageLeaveBackward {
  0% {
    transform: translateX(0vw) scale(1);
  }
  10% {
    transform: translateX(0vw) scale(0.9);
  }
  100% {
    transform: translateX(100vw);
    display: none;
  }
}

@keyframes InitialRenderTrans {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

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

.initialRender {
  animation: InitialRenderTrans 0.75s;
}
.forward-enter-active {
  animation: PageEnterForward 0.75s;
}
.backward-enter-active {
  animation: PageEnterBackward 0.75s;
}
.forward-leave-active {
  position: absolute;
  animation: PageLeaveForward 0.75s;
}
.backward-leave-active {
  position: absolute;
  animation: PageLeaveBackward 0.75s;
}

.scrollTopBtn-enter-active {
  animation: scrollTopBtnAnim 0.5s;
}

.scrollTopBtn-leave-active {
  animation: scrollTopBtnAnim 0.5s reverse;
}

.contentContainer {
  padding: $rootMargin;
  margin-bottom: calc(#{$contactButtonHeight} + 2 * #{$contentMargin});
}
.contactActionBtn {
  z-index: 9999;
  position: fixed;
  bottom: 2 * $rootMargin;
  right: 2 * $rootMargin;
  @media only screen and (max-width: $breakpoint-sm-max) {
    transform: translateY(-$bottomNavHeight);
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
</style>
