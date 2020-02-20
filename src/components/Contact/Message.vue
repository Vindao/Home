<template>
  <q-form class="contactForm" @submit="onSubmit">
    <textarea
      v-model="text"
      color="secondary"
      type="text"
      placeholder="Your Message..."
      class="message"
    />
    <SubmitBtn label="Send" :loading="loading" />
  </q-form>
</template>

<script lang="ts">
import Vue from 'vue';
// componrnts
import SubmitBtn from './SubmitBtn.vue';
export default Vue.extend({
  data: () => ({
    text: ''
  }),
  components: {
    SubmitBtn
  },
  props: {
    done: Function
  },
  methods: {
    onSubmit() {
      // handle message
      this.done();
    }
  }
});
</script>

<style lang="scss" scoped>
$submitTotalHeight: calc(10vh + 2 * #{$contentMargin});
.messageFormWrapper {
  width: 100%;
  height: 100%;
}
.message {
  height: calc(
    #{$fullScreenModalHeight} - #{$fullScreenModalBottom} - #{$submitTotalHeight}
  );
  padding: $contentMargin;
  width: 100%;
  resize: none;
}
.submitButtonWrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: $submitTotalHeight;
  width: 100%;
  .submitButton {
    width: 40%;
    height: 4vh;
  }
}
</style>
