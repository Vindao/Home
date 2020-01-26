<template>
  <div>
    <div class="flex justify-center" v-show="toTopBtn">
      <q-btn
        fab
        color="secondary"
        icon="arrow_forward_ios"
        class="scrollToTopBtn transition-show"
        @click="toTop"
      />
    </div>

    <div
      :class="{contactActionBtnWrapper: true, flex: true,  'justify-end': !atBottom, 'justify-center': atBottom, inFooter: atBottom}"
    >
      <q-btn
        color="accent"
        class="shadow-15 contactActionBtn"
        text-color="primary"
        size="24px"
        round
        icon="message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { scroll } from 'quasar';
const { getScrollPosition, getScrollTarget } = scroll;
export default Vue.extend({
  name: 'ActionButtons',
  data: () => ({
    toTopBtn: false,
    atBottom: false
  }),
  methods: {
    scrolled(e: Event) {
      if (typeof window === 'undefined') return;
      //@ts-ignore
      const top = window.pageYOffset || e.target.scrollTop || 0;

      // handle scrollToTopBtn

      // handle Footer intersect

      const scrollPos =
        window.scrollY || document.getElementsByTagName('html')[0].scrollTop;
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const scrollMax = scrollHeight - window.innerHeight;

      if (scrollPos > scrollMax - 144) {
        console.log('at footer');
        this.toTopBtn = false;
        // alert('start');
      } else {
        this.toTopBtn = top > 20;
      }
      if (scrollPos === scrollMax) {
        console.log('at bottom');

        this.atBottom = true;
      } else {
        this.atBottom = false;
      }

      // handle
    },
    toTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolled, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolled, true);
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

.scrollTopBtn-enter-active {
  animation: scrollTopBtnAnim 0.5s;
}

.scrollTopBtn-leave-active {
  animation: scrollTopBtnAnim 0.5s reverse;
}

.contactActionBtnWrapper {
  position: fixed;
  width: $contactButtonHeight;
  right: 0;
  bottom: 0;
  padding: 0 $contentMargin $contentMargin $contentMargin;
  @media only screen and (max-width: $breakpoint-sm-max) {
    transform: translateY(-$bottomNavHeight);
  }
  &.inFooter {
    padding-bottom: 72px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .contactActionBtn {
    z-index: 9999;
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