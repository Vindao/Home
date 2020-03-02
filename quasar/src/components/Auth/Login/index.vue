<template>
  <q-form class="contactForm" @submit="onSubmit">
    <q-input color="secondary" v-model="formData.email" type="email" label="Email" />
    <q-input color="secondary" v-model="formData.password" type="password" label="Password" />

    <SubmitBtn label="Login" :loading="loading" />
  </q-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
// components
import SubmitBtn from '../../SubmitBtn.vue';
export default Vue.extend({
  name: 'Login',
  components: {
    SubmitBtn
  },
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    loading: false
  }),
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.loading = true;
      const loginData = {
        email: this.formData.email,
        password: this.formData.password
      };
      this.login(loginData);
    }
  }
});
</script>

<style>
</style>