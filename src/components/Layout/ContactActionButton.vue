<template>
  <q-btn
    v-scroll="scrolled"
    id="contactBtnWrapperId"
    color="accent"
    class="shadow-15 contactActionBtn"
    text-color="primary"
    size="24px"
    round
    icon="message"
    :style="{ transform: transformContactBtn }"
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ContactActionButton',
  data: () => ({
    elements: {
      window: null,
      MainAppWrapper: null
    },
    animationFrame: false,
    currenttransform: 0,
    translateX: '0',
    translateY: '0'
  }),
  computed: {
    transformContactBtn() {
      return `translate(calc(${this.translateX}), -${this.translateY})`;
    }
  },
  mounted() {
    //@ts-ignore
    // TODO: set types

    this.elements.window = window;
    //@ts-ignore
    this.elements.MainAppWrapper = document.querySelector('#MainAppWrapper');
  },
  methods: {
    getToBottom(position: number) {
      const maxScroll =
        //@ts-ignore
        this.elements.MainAppWrapper.offsetHeight -
        //@ts-ignore
        this.elements.window.innerHeight;
      // const position =
      //   window.scrollY || document.getElementsByTagName('html')[0].scrollTop;

      const toBottom = maxScroll - position;

      return toBottom;
    },
    scrolled(position: number) {
      //@ts-ignore
      if (process.browser) {
        const toBottom = this.getToBottom(position);

        if (toBottom <= 270) {
          const currenttransformPer = (270 - toBottom) / 270;
          this.translateY = `${currenttransformPer * 117}px`;
          this.translateX =
            //@ts-ignore
            `${-currenttransformPer} * (46vw - 36px)`;
          return;
        }
      }
      console.log('scrolled');

      this.translateX = '0vw';
      this.translateY = '0vw';
    }
  }
});
</script>

<style lang="scss" scoped>
.contactActionBtn {
  position: fixed;
  width: $contactButtonHeight;
  right: $contentMargin;
  bottom: $contentMargin;
  @media only screen and (max-width: $breakpoint-sm-max) {
    bottom: calc(#{$contentMargin} + #{$bottomNavHeight});
  }
  z-index: 9999;
}

.ActionBtnsWrapper {
  width: 100%;
}
</style>