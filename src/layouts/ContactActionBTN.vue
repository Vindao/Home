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
    <v-dialog v-model="contactOpen" max-width="600px">
      <ContactForm :toggle="contactOpen" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from '@/components/ContactForm.vue';

import { TweenMax } from 'gsap';
import { mapGetters, mapMutations } from 'vuex';
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
  computed: {
    ...mapGetters({ open: 'UI/contactOpen' }),
    contactOpen: {
      get() {
        return this.open;
      },
      set() {
        this.$store.commit('UI/toggleContact');
      }
    }
  },
  mounted() {
    //@ts-ignore
    if (process.browser) {
      this.footerDiv = document.getElementById('footerCaBtn');
      this.footerHeight = this.footerDiv.offsetHeight;

      console.log(this.footerOffsetTop);
      const transX = document.body.clientWidth / 2 - 36;
      const transY = this.footerHeight / 1.75;

      this.action = TweenMax.to('#CaBtn', 1, {
        x: -transX,
        y: -transY,
        ease: 'linear'
      });
      this.action.pause();
      //@ts-ignore
      document.addEventListener('scroll', this.onScroll, true);
    }
  },
  watch: {
    $route() {
      //@ts-ignore
      if (process.browser) {
        this.footerOffsetTop =
          document.body.scrollHeight - window.innerHeight - this.footerDiv.clientHeight;
      }
    }
  },
  beforeDestroy() {
    //@ts-ignore
    document.removeEventListener('scroll', this.onScroll, true);
  },
  methods: {
    onScroll(e: any) {
      //@ts-ignore
      if (process.browser) {
        if (this.footerOffsetTop === 0) {
          this.footerOffsetTop =
            document.body.scrollHeight - window.innerHeight - this.footerDiv.clientHeight;
        }
        const relativeScroll = window.scrollY - this.footerOffsetTop;
        // console.log(document.body.scrollHeight - window.innerHeight - this.footerDiv.clientHeight);
        // console.log(window.scrollY);

        if (relativeScroll > 0) {
          const progress = (relativeScroll / this.footerHeight).toFixed(2);

          this.action.progress(progress);
        } else {
          this.action.progress(0);
        }
      }
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
