<template>
  <div id="welcome" class="text-center ">
    <h4>{{ $t('Home.Slogans[0]') }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
#welcome {
  font-weight: bolder;
  h4 {
    font-family: 'Handlee', cursive;
  }
}
</style>
