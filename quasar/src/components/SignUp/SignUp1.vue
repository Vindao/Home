<template>
  <q-form class="contactForm" @submit="onSubmit">
    <q-input
      color="secondary"
      v-model="formData.name"
      type="text"
      label="Name *"
      :rules="[val => validate('name', val)]"
    />
    <q-input
      color="secondary"
      v-model="formData.email"
      type="email"
      label="Email *"
      :rules="[val => validate('email', val), val => checkEmail(val)]"
    />
    <q-input
      color="secondary"
      v-model="formData.company"
      label="Company"
      :rules="[val => validate('company', val)]"
    />
    <q-input
      color="secondary"
      v-model="formData.phone"
      type="phone"
      label="Phone"
      :rules="[
        val => validate('phone', val) || 'Please enter a valid phone number'
      ]"
    />
    <SubmitBtn label="Next" :loading="loading" />
  </q-form>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
//helpers
import { validate } from '../../../../lib/formVal';
import { checkEmail } from '../../lib/store/user';
// components
import SubmitBtn from '../SubmitBtn.vue';
export default Vue.extend({
  data: () => ({
    formData: {
      name: '',
      email: '',
      company: '',
      phone: ''
    },

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
      const data = this.formData;
      this.done(data);
    },
    checkEmail,
    validate
  }
});
</script>

<style></style>
