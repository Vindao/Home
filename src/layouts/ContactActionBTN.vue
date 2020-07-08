<template>
  <div style="position: absolute">
    <div id="CaBtn">
      <v-btn
        x-large
        fab
        color="accent"
        class="contactActionBTN"
        @click="$store.commit('UI/toggleContact')"
      >
        <v-icon>chat</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from '@/components/ContactForm/index.vue';

import { TweenMax } from 'gsap';
import { mapMutations } from 'vuex';
export default Vue.extend({
  components: {
    ContactForm
  },
  data: () => ({
    action: null as null | any,
    footerDiv: null as null | any,
    footerHeight: 0,
    footerOffsetTop: 0
  }),

  watch: {
    $route() {
      //@ts-ignore
      this.footerOffsetTop = document.body.scrollHeight - window.innerHeight - this.footerHeight;
    }
  },
  mounted() {
    //@ts-ignore
    if (process.browser) {
      //@ts-ignore
      let observer = new IntersectionObserver(this.intersect, {});
      this.footerDiv = document.getElementById('footerCaBtn');

      observer.observe(this.footerDiv);

      this.footerHeight = this.footerDiv.offsetHeight;
      //@ts-ignore

      this.createAnimation();

      //@ts-ignore
      document.addEventListener('scroll', this.onScroll, true);
      //@ts-ignore
      window.addEventListener('resize', this.resetScreen, true);
    }
  },

  beforeDestroy() {
    //@ts-ignore
    document.removeEventListener('scroll', this.onScroll, true);
    //@ts-ignore
    window.removeEventListener('resize', this.resetScreen, true);
  },
  methods: {
    intersect(entries: any, observer: any) {
      console.log(entries[0].target);
      this.footerHeight = entries[0].target.offsetHeight;
      //@ts-ignore
      if (this.$vuetify.breakpoint.xs) {
        this.footerOffsetTop = entries[0].target.offsetTop - window.innerHeight + 72;
      } else {
        this.footerOffsetTop = entries[0].target.offsetTop - window.innerHeight;
      }
    },
    onScroll(e: any) {
      //@ts-ignore
      const relativeScroll = window.scrollY - this.footerOffsetTop;
      if (relativeScroll > 0) {
        const progress = (relativeScroll / this.footerHeight).toFixed(2);

        this.action.progress(progress);
      } else {
        this.action.progress(0);
      }
    },
    resetScreen(e: any) {
      console.log('resized');
      //@ts-ignore
      this.createAnimation();
    },
    createAnimation() {
      const transX = document.body.clientWidth / 2 - 36;
      const transY = this.footerHeight / 1.9;

      this.action = TweenMax.to('#CaBtn', 1, {
        x: -transX,
        y: -transY,
        ease: 'linear'
      });
      this.action.pause();
    }
  }
});
</script>
<style lang="scss" scoped>
.contactActionBTN {
  @media only screen and (max-width: 600px) {
    transform: translateY(-72px);
  }
}
#CaBtn {
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-8px, -8px);
  @media only screen and (min-width: 600px) {
    transform: translate(-24px, -24px);
  }
  @media only screen and (min-width: 960px) {
    transform: translate(-48px, -48px);
  }
  @media only screen and (min-width: 1264px) {
    transform: translate(-80px, -80px);
  }
  // ma-2 ma-md-12 ma-lg-20
}
</style>
