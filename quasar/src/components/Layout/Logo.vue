<template>
  <router-link to="/" class="flex align-center justify-start">
    <div class="logoWrapper"></div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Logo'
});
</script>

<style lang="scss" scoped>
.logoWrapper {
  width: 150px;
  height: 54px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  background-image: url('https://yingeder.sirv.com/Vindao/Vindao_logo.png?w=150');

  @media only screen and (max-width: 500px) {
    background-image: url('https://yingeder.sirv.com/Vindao/Vindao_icon.png?w=80');
  }
}
</style>