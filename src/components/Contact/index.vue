<template>
  <q-card class="contactModal">
    <SignUp :done="onSignUp" v-if="!loggedIn" />
    <Message :done="onMessage" v-else />
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
// subCompoentns
import SignUp from './SignUp.vue';
import Message from './Message.vue';

export default Vue.extend({
  name: 'Contact',
  props: {
    close: Function
  },
  data: () => ({
    loggedIn: false
  }),
  components: {
    SignUp,
    Message
  },
  methods: {
    onMessage() {
      console.log('send');
    },
    onSignUp() {
      this.loggedIn = true;
      console.log('done');
    }
  }
});
</script>

<style lang="scss" scoped>
.contactModal {
  position: fixed;

  bottom: $fullScreenModalBottom;
  left: $fullScreenModalLeft;
  width: $fullScreenModalWidth;
  height: $fullScreenModalHeight;
  opacity: 0.98;
  background-color: $light;
  @media only screen and(max-width: $breakpoint-sm-max) {
    bottom: $fullScreenModalBottomMobile;
    height: $fullScreenModalHeightMobile;
  }
  .formHeader {
    text-align: center;

    .closeContact {
      height: 1em;
      position: absolute;
      right: $contentMargin;
      top: $contentMargin;
      background-color: transparent;
      border: none;
      cursor: pointer;
      z-index: 1;
    }
  }
}
</style>

<style lang="scss">
.contactForm {
  width: 100%;
  height: 100%;
  padding: 2 * $contentMargin;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
