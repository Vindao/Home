<template>
  <q-form class="contactForm" @submit="onSubmit">
    <q-input
      color="secondary"
      v-model="formData.password"
      type="password"
      label="Password *"
      :rules="[val => validate('password', val)]"
    />
    <q-input
      color="secondary"
      v-model="formData.confPassword"
      type="password"
      label="Confirm password *"
      :rules="[val => validate('confPassword', formData.password, val)]"
    />

    <SubmitBtn label="Next" :loading="loading" />
  </q-form>
</template>

<script lang="ts">
import Vue from 'vue';
// helpers
import { validate } from '../../../../lib/formVal';
// components
import SubmitBtn from '../SubmitBtn.vue';

export default Vue.extend({
  name: 'SignUp_2',
  components: {
    SubmitBtn
  },
  data: () => ({
    formData: {
      password: '',
      confPassword: ''
    },
    loading: false
  }),
  props: {
    done: Function
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.done(this.formData.password);
    },
    validate
  }
});
</script>
<style></style>
