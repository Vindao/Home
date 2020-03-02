<template>
  <div class="auth">
    <nav class="authnav">
      <q-tabs class="authTabs" v-model="type">
        <q-tab class="authTab" name="register" label="Register" />
        <q-tab class="authTab" name="login" label="Login" />
      </q-tabs>
    </nav>
    {{type}}
    <SignUp v-show="type === 'register'" />
    <Login v-show="type === 'login'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import SignUp from './SignUp/index.vue';
import Login from './Login/index.vue';
export default Vue.extend({
  name: 'Auth',
  components: {
    SignUp,
    Login
  },
  data: () => ({
    type: 'register'
  })
});
</script>

<style lang="scss" scoped>
.auth {
  height: 100%;
  .authnav {
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;

    .authTabs {
      .authTab {
        width: 30vw;
      }
    }
  }
}
</style>

<style lang="scss">
.contactForm {
  height: 100%;
  padding: $contentMargin;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>