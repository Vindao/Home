<template>
  <div>
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
      @click="show = !show"
    />
    <transition name="contactFormTransition">
      <Contact v-show="show" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Contact from '../Contact.vue';
export default Vue.extend({
  name: 'ContactActionButton',
  components: {
    Contact
  },
  data: () => ({
    show: false,
    elements: {
      window: null,
      MainAppWrapper: null
    },
    translateX: '0vw',
    translateY: '0vw'
  }),
  computed: {
    transformContactBtn() {
      return `translate(calc(${this.translateX}), -${this.translateY})`;
    }
  },
  mounted() {
    //@ts-ignore
    if (process.browser) {
      //@ts-ignore
      // TODO: set types
      this.elements.window = window;
      //@ts-ignore
      this.elements.MainAppWrapper = document.querySelector('#MainAppWrapper');
    }
  },
  methods: {
    toBottom(position: number) {
      const maxScroll =
        //@ts-ignore
        this.elements.MainAppWrapper.offsetHeight -
        //@ts-ignore
        this.elements.window.innerHeight;

      const toBottom = maxScroll - position;

      return toBottom;
    },
    scrolled(position: number) {
      //@ts-ignore
      const toBottom = this.toBottom(position);

      if (toBottom <= 270) {
        const currenttransformPer = (270 - toBottom) / 270;
        this.translateY = `${currenttransformPer * 117}px`;

        this.translateX = `${-currenttransformPer *
          //@ts-ignore
          (this.elements.MainAppWrapper.clientWidth / 2 - 36 - 18)}px`;
        return;
      }

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

@keyframes contactFormEnter {
  0% {
    transform: scale(0);
    transform-origin: 95% 95%;
  }

  100% {
    transform: scale(1);
  }
}

.contactFormTransition-enter {
}

.contactFormTransition-enter-active {
  animation: contactFormEnter 2s;
}

.contactFormTransition-leave-active {
  animation: contactFormEnter 2s reverse;
}
</style>
