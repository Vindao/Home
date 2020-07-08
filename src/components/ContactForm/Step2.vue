<template>
  <v-form @submit.prevent="send" v-model="valid">
    <!-- <textarea :placeholder="text.Forms.message.label" v-model="message" class="textArea" />
     -->
    <v-textarea
      autofocus
      no-resize
      :label="$t('Forms.message.label')"
      :placeholder="$t('Forms.message.placeholder')"
      v-model="message"
    ></v-textarea>
    <v-checkbox id="accept" v-model="accepted" :rules="[val => val === true]">
      <i slot="label">
        {{ $t('Forms.acceptPrivacyPolicy.start') }}
        <span
          style="text-decoration: underline"
          :style="{
            color: $vuetify.theme.dark
              ? $vuetify.theme.themes.dark.primary
              : $vuetify.theme.themes.light.primary
          }"
          @click.prevent="$store.commit('UI/togglePrivacyPolicy')"
          >{{ $t('Forms.acceptPrivacyPolicy.link') }}
        </span>
        {{ $t('Forms.acceptPrivacyPolicy.end') }}
      </i>
    </v-checkbox>
    <i
      class="v-label"
      :class="{
        'theme--light': !$vuetify.theme.dark,
        'theme--dark': $vuetify.theme.dark
      }"
    >
      {{ $t('Forms.acceptPrivacyPolicy.note') }}</i
    >

    <div class="formBtnWrapper mt-2">
      <v-btn
        x-large
        :disabled="!valid"
        :loading="loading"
        color="secondary"
        class="primary--text"
        type="submit"
        >{{ $t('Forms.BTNS.send') }}</v-btn
      >
    </div>
    <p v-show="error" class="error--text text-center">
      {{ $t('errors.sendMessage') }}
    </p>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    setValues: Function,
    submit: Function,
    loading: Boolean,
    error: Boolean
  },
  data: () => ({
    message: '',
    accepted: false,
    valid: false
  }),
  methods: {
    send() {
      this.setValues({ message: this.message });
      this.submit();
    }
  }
});
</script>

<style lang="scss" scoped>
.textArea {
  height: 100%;
  min-height: 30vh;
  width: 100%;
  resize: none;
  outline: none;
  border-bottom: solid 1px;
}
</style>
