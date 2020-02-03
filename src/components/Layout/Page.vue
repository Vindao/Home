<template>
  <q-page-container v-touch-swipe.mouse.left.right="swiped" style="padding-bottom: 0">
    <q-page class="pageContainer flex justify-center" id="PageContainerId">
      <div class="contentContainer">
        <transition appear appear-active-class="initialRender" :name="transitionName">
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
export default Vue.extend({
  name: 'Page',
  data: () => ({
    transitionName: 'forward'
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
.pageContainer {
  overflow-x: hidden;
  min-height: 100vh;

  @media only screen and (max-width: $breakpoint-sm-max) {
    margin-bottom: $bottomNavHeight;
  }
  .contentContainer {
    width: 100%;
    margin: $rootMargin;
  }
}
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
</style>
