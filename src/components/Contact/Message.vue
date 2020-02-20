<template>
  <div class="contactForm">
    <!-- <h2>
      <h5>Please send us a quick overview of your project</h5>
    </h2>-->
    <q-form @submit="onSubmit">
      <textarea
        v-model="text"
        color="secondary"
        type="text"
        placeholder="Your Message..."
        class="message"
      />
      <div class="submitButtonWrapper">
        <q-btn label="Send" type="submit" color="primary" :loading="loading" class="submitButton" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    text: ''
  }),
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