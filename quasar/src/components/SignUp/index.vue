<template>
  <section class="signupForm">
    <SignUp1 v-show="step === 1" :done="onStep1Done" />
    <sign-up2 v-show="step === 2" :done="onStep2Done" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
// types
import { Signup1DataI, Signup2DataI } from '../../types/Signup';
// components
import SignUp1 from './SignUp1.vue';
import SignUp2 from './SignUp2.vue';
export default Vue.extend({
  name: 'SignUp',
  components: {
    SignUp1,
    SignUp2
  },
  data: () => ({
    step: 1,
    formData: {
      name: '',
      email: '',
      company: '',
      phone: '',
      password: ''
    }
  }),
  methods: {
    onStep1Done(data: Signup1DataI) {
      this.formData = { ...this.formData, ...data };
      this.step = 2;
    },
    onStep2Done(data: Signup2DataI) {
      this.formData = { ...this.formData, ...data };
      this.submit();
    },
    submit() {
      console.log(this.formData);
    }
  }
});
</script>

<style lang="scss" scoped>
.signupForm {
  height: 100%;
  width: 100%;
}

.contactForm {
  width: 100%;
  height: 100%;
  padding: $contentMargin;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
