<template>
  <section class="signupForm">
    <SignUp1 v-show="step === 1" :done="onStep1Done" />
    <sign-up2 v-show="step === 2" :done="onStep2Done" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapGetters } from 'vuex';
// types
import { Signup1DataI, Signup2DataI } from '../../types/Signup';
// components
import SignUp1 from './SignUp1.vue';
import SignUp2 from './SignUp2.vue';
import { RegisterBodyI } from '../../../../types/User';
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
  computed: {
    ...mapGetters(['userLang'])
  },
  methods: {
    ...mapMutations(['signup']),
    onStep1Done(data: Signup1DataI) {
      this.formData = { ...this.formData, ...data };
      this.step = 2;
    },
    onStep2Done(data: Signup2DataI) {
      console.log(data);
      this.formData = { ...this.formData, password: data };
      this.submit();
    },
    submit() {
      console.log(this.formData);
      const UserData: RegisterBodyI = {
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
        company: this.formData.company,
        phone: this.formData.phone,
        language: this.userLang
      };
      this.signup(UserData);
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
