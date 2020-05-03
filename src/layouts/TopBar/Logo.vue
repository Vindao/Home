<template>
  <g-link to="/">
    <div class="logoWrapper">
      <v-img
        src="https://res.cloudinary.com/dhrg3xz0y/image/upload/c_fill,f_auto,q_auto,w_40/v1587936625/Vindao%20Home/logo_qgabfx.png"
        aspect-ratio="1"
      />
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
