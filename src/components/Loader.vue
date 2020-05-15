<template>
  <div class="loader">
    <div class="loaderContent">
      <img sizes="20vw" :src="src" :srcset="src.srcSet" alt="Logo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Img from '@/components/Image.vue';
export default Vue.extend({
  components: {
    Img
  },
  data: () => ({
    src: require('~/assets/logo.png?resize')
  })
});
</script>
<style lang="scss" scoped>
@keyframes LoaderAnim {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
.loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00b566;
  .loaderContent {
    width: 20vw;
    height: 20vw;
    transform-origin: 50% 50%;
    animation: LoaderAnim 1s infinite;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
