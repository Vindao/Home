<template>
  <q-card v-show="show" class="contactModal" id="contactModal">
    <Auth v-if="!loggedIn" />
    <Message v-else :done="onMessage" />
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
// subCompoentns
import Auth from '../Auth/index.vue';
import Message from './Message.vue';

export default Vue.extend({
  name: 'Contact',
  props: {
    close: Function,
    show: Boolean
  },

  components: {
    Auth,
    Message
  },
  computed: {
    ...mapGetters(['loggedIn'])
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
