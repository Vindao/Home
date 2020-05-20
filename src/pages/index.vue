<template>
  <div class="homeWrapper">
    <img
      class="bgImage"
      :src="require('~/assets/images/background.jpg?lqip')"
      :alt="text.Home.bgImage.alt"
    />

    <v-container class="homeContainer">
      <v-row align="center">
        <v-col
          class="col-12 text-center align-center black--text"
          height="100%"
          style="z-index: 1;"
        >
          <h1 class="heroHeader mb-5">{{ text.Home.Slogan }}</h1>
          <p>
            {{ text.Home.paragraph }}
          </p>
        </v-col>
        <v-col class="col-12 text-center align-center" height="100%" style="z-index: 1;">
          <v-btn to="/services" color="#00b566" style="color: #004d40">{{
            text.Home.seeMore
          }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { mapRoutes } from '../utils/router';

import Img from '@/components/Image.vue';
export default Vue.extend({
  components: {
    Img
  },
  computed: {
    ...mapGetters({ text: 'Language/text', language: 'Language/language' })
  },
  data: () => ({
    lang: 'en',
    title: 'Home'
  }),
  head() {
    return {
      htmlAttrs: {
        lang: this.lang
      },
      //@ts-ignore

      title: this.title
    };
  },
  created() {
    this.lang = this.language;
    this.title = this.text.Navigation.home;
  },
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.name === 'index') {
      const fromN = mapRoutes(from.path);
      const toN = mapRoutes(to.path);
      const back = fromN > toN;
      const swipeSpecial = to.query.swipeSpecial;
      const possible = ['forward', 'backward'];
      if (swipeSpecial) {
        possible.unshift(possible.pop() as string);
      }
      return back ? possible[1] : possible[0];
    }
    return '';
  }
});
</script>

<style lang="scss" scoped>
.homeWrapper {
  height: 100%;

  .bgImage {
    position: absolute;
    z-index: 0;
    min-width: 110vw;
    min-height: 100%;
    left: -5vw;
  }
  .homeContainer {
    height: calc(100vh - 128px);
    display: flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
      height: calc(100vh - 128px - 72px);
    }
    h1 {
      font-size: 1.75em;
    }
  }
}
</style>
