<template>
  <q-card v-show="show" class="contactModal" id="contactModal">
    <q-btn
      label="switch"
      @click="loggedIn = !loggedIn"
      style="position:absolute; z-index:999;"
    />
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
    close: Function,
    show: Boolean
  },
  data: () => ({
    loggedIn: false
  }),
  components: {
    SignUp,
    Message
  },
  mounted() {
    document.addEventListener('click', this.handleClickAway, true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickAway, true);
  },
  methods: {
    onMessage() {
      console.log('send');
    },
    onSignUp() {
      this.loggedIn = true;
      console.log('done');
    },
    handleClickAway(e: any) {
      const modalNode = document.getElementById('contactModal');
      //@ts-ignore

      if (!modalNode.contains(e.target)) {
        this.close();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.contactModal {
  z-index: 9999;
  position: fixed;
  min-height: 420px;
  top: $fullScreenModalTop;
  bottom: $fullScreenModalBottom;
  right: $fullScreenModalLeft;
  left: $fullScreenModalLeft;

  opacity: 0.98;
  background-color: $lightDark;
  @media only screen and(max-width: $breakpoint-sm-max) {
    top: $fullScreenModalTopMobile;
    bottom: $fullScreenModalBottomMobile;
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
  padding: $contentMargin;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
