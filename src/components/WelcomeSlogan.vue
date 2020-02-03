<template>
  <div id="welcome" class="text-center flex items-center">
    <h4>{{ $t('Home.Slogans[0]') }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
#welcome {
  height: calc((100vh - #{$headerHeight} - #{$bottomNavHeight}) * 0.382);
  font-weight: bolder;
  padding: 0 $contentMargin;
  h4 {
    font-family: 'Handlee', cursive;
  }
}
</style>
