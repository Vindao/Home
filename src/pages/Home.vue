<template>
  <div class="home flex text-center">
    <q-card class="pageCard">
      <WelcomeSlogan />
      <CTA />
      <div class="heroWrappe">
        <video
          autoplay
          muted
          loop
          id="Hero"
          preload="metadata"
          poster="https://yingeder.sirv.com/Vindao/CoffePourSlomo%20(2).m4v?thumbnail"
        >
          <source src="https://yingeder.sirv.com/Vindao/CoffePourSlomo%20(2).m4v" type="video/mp4" />
        </video>
      </div>
    </q-card>
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
.heroWrapper {
  scroll-behavior: contain;
}
#Hero {
  scroll-behavior: none;
  max-height: 100%;
  position: absolute;
  width: 100%;
  transform-origin: 50% 50%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
