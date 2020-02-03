<template>
  <div class="home flex text-center">
    <WelcomeSlogan />
    <CTA />
    <video
      autoplay
      muted
      loop
      id="Hero"
      preload="metadata"
      poster="https://yingeder.sirv.com/Vindao/CoffePourSlomo%20(2).m4v?thumbnail"
    >
      <source
        src="https://yingeder.sirv.com/Vindao/CoffePourSlomo%20(2).m4v"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeSlogan from '../components/WelcomeSlogan.vue';
import CTA from '../components/CTA.vue';
// components
import Page from '../components/Layout/Page.vue';
import Picture from '../components/Picture.vue';
export default Vue.extend({
  components: {
    Picture,
    WelcomeSlogan,
    CTA
  }
});
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
#Hero {
  position: fixed;
  min-width: 100vw;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
