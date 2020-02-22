<template>
  <div id="welcome" class="text-center ">
    <h4>{{ language.Home.Slogans[0] }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  name: 'WelcomeSlogan',
  computed: {
    ...mapGetters(['language'])
  }
});
</script>

<style lang="scss" scoped>
#welcome {
  font-weight: bolder;
  h4 {
    font-family: 'Handlee', cursive;
  }
}
</style>
