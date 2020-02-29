<template>
  <q-form class="contactForm" @submit="onSubmit">
    <section class="chat"></section>
    <section class="message">
      <textarea
        v-model="text"
        color="secondary"
        type="text"
        placeholder="Your Message..."
        class="textArea"
      />
      <q-btn
        round
        color="secondary"
        icon="send"
        class="submitButton"
        type="submit"
        :loading="loading"
      />
    </section>
  </q-form>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    text: '',
    loading: false
  }),
  components: {},
  props: {
    done: Function
  },
  methods: {
    onSubmit() {
      // handle message
      this.loading = true;
      this.done();
    }
  }
});
</script>

<style lang="scss" scoped>
$messageHeight: 100px;
$borderWidth: 1.5px;
.chat {
  height: 100%;
  border: solid;
  border-width: $borderWidth;
  border-bottom: none;
  border-color: rgba(0, 77, 64, 0.3);
}

.message {
  height: $messageHeight;
  display: flex;
  justify-content: space-between;
  padding: $rootMargin;

  width: 100%;
  resize: none;
  border: solid;
  border-width: $borderWidth;

  border-color: rgba(0, 77, 64, 0.3);
  .textArea {
    height: 100%;

    width: 100%;
    border: none;
    resize: none;
  }
  .submitButton {
    align-self: flex-end;
    padding: 0;
  }
}
</style>
