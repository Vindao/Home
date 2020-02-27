<template>
  <q-form class="contactForm" @submit="onSubmit">
    <q-input
      color="secondary"
      v-model="name"
      type="text"
      label="Name *"
      :rules="[val => validate('name', val)]"
    />
    <q-input
      color="secondary"
      v-model="email"
      type="email"
      label="Email *"
      :rules="[val => validate('email', val)]"
    />
    <q-input
      color="secondary"
      v-model="company"
      label="Company"
      :rules="[val => validate('company', val)]"
    />
    <q-input
      color="secondary"
      v-model="phone"
      type="phone"
      label="Phone"
      :rules="[
        val => validate('phone', val) || 'Please enter a valid phone number'
      ]"
    />
    <submit-btn label="Next" :loading="loading" />
  </q-form>
</template>
<script lang="ts">
import Vue from 'vue';
//helpers
import { validate } from '../../../lib/formVal';
// components
import SubmitBtn from './SubmitBtn.vue';
export default Vue.extend({
  data: () => ({
    name: '',
    email: '',
    company: '',
    phone: '',
    disabled: true,
    loading: false
  }),
  components: {
    SubmitBtn
  },
  props: {
    done: Function
  },
  methods: {
    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.done();
      }, 500);
    },
    validate
  }
});
</script>

<style></style>
