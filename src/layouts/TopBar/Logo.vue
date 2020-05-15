<template>
  <nuxt-link to="/">
    <div class="logoWrapper">
      <Img
        :src="require('~/assets/logo.png?resize')"
        :placeholder="require('~/assets/logo.png?lqip')"
        alt="Logo"
      />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Img from '@/components/Image.vue';
export default Vue.extend({
  name: 'Logo',
  components: {
    Img
  }
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
