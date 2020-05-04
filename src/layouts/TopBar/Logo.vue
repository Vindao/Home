<template>
  <g-link to="/">
    <div class="logoWrapper">
      <g-image width="48px" src="~/assets/logo.png" />
    </div>
  </g-link>
</template>

<script lang="ts">
import Vue from 'vue';
//@ts-ignore
export default Vue.extend({
  name: 'Logo'
});
</script>

<style lang="scss" scoped>
.logoWrapper {
  width: $Logo-size;
  height: $Logo-size;
  #Logo {
    width: 100%;
    height: 100%;
  }
}
</style>
