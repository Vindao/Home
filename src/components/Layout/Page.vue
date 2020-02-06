<template>
  <q-page-container
    v-touch-swipe.mouse.left.right="swiped"
    style="padding-bottom: 0"
  >
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
// helpers
import { mapRoutes } from '../../lib/helpers/router';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
// constants
const transitionDuration = 2;
export default Vue.extend({
  name: 'Page',
  data: () => ({
    transitionDirection: 'forward',
    tl: new TimelineMax()
  }),
  // mounted() {
  //   const tl = new TimelineMax
  //   tl.to('#PageContainerId', { x: 100, duration: 5 })
  // },
  watch: {
    $route(to, from) {
      if (mapRoutes(to.path) < mapRoutes(from.path)) {
        this.transitionDirection = 'backward';
        console.log('backward');
        // this.goBack();
      } else {
        this.transitionDirection = 'forward';

        // this.goForward();
      }
    }
  },
  methods: {
    enter(el: any, done: any) {
      if (this.transitionDirection === 'forward') {
        const enterTl = new TimelineMax({
          onComplete: done
        });

        enterTl.set(el, {
          x: window.innerWidth,
          transformOrigin: '50% 50%',
          opacity: 0.5
        });

        enterTl.to(el, transitionDuration, {
          x: 0,
          ease: Power4.easeOut,
          opacity: 1
        });
      } else {
        const tl = new TimelineMax({
          onComplete: done
        });

        tl.set(el, {
          x: -window.innerWidth,
          transformOrigin: '50% 50%',
          opacity: 0.5
        });

        tl.to(el, transitionDuration, {
          x: 0,
          ease: Power4.easeOut,
          opacity: 1
        });
      }
    },
    leave(el: any, done: any) {
      if (this.transitionDirection === 'forward') {
        const tl = new TimelineMax({
          onComplete: done
        });
        tl.set(el, {
          position: 'fixed'
        });
        tl.to(el, transitionDuration - 0.1, {
          x: -window.innerWidth,
          opacity: 0,
          ease: Power4.easeOut
        });
      } else {
        const tl = new TimelineMax({
          onComplete: done
        });
        tl.set(el, {
          position: 'fixed'
        });
        tl.to(el, transitionDuration - 0.1, {
          x: window.innerWidth,
          opacity: 0,

          ease: Power4.easeOut
        });
      }
    },
    swiped({ ...info }) {
      const direction = info.direction;

      if (direction === 'left') {
        switch (this.$router.currentRoute.path) {
          case '/':
            this.$router.push('/services');
            break;
          case '/services':
            this.$router.push('/about');
            break;
        }
      } else {
        switch (this.$router.currentRoute.path) {
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
  min-height: 100vh;
  overflow-x: hidden;
  @media only screen and (max-width: $breakpoint-sm-max) {
    margin-bottom: $bottomNavHeight;
  }
  .contentContainer {
    width: 100%;
    max-width: 100vw;
    margin: $rootMargin;
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

@keyframes InitialRenderTrans {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

$timingFunction: cubic-bezier(0.25, 1, 0.5, 1.05);
$transitionDuration: 400ms;

.initialRender {
  animation: InitialRenderTrans $transitionDuration;
}
.forward-enter-active {
  animation: PageEnterForward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.backward-enter-active {
  animation: PageEnterBackward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.forward-leave-active {
  overflow: hidden;
  position: fixed;

  animation: PageLeaveForward $transitionDuration;
  animation-timing-function: $timingFunction;
}
.backward-leave-active {
  overflow: hidden;
  position: fixed;
  left: $rootMargin;
  animation: PageLeaveBackward $transitionDuration;
  animation-timing-function: $timingFunction;
}
</style>
