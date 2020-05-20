<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-center text-center">
        {{ text.About.hero.title }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ text.About.hero.paragraph }}
      </v-card-text>
    </v-card>
    <v-card-title class="justify-center text-center mt-2" style="font-size: 2em;">{{
      text.About.technologies.title
    }}</v-card-title>
    <v-row>
      <v-col
        v-for="tech in text.About.technologies.technologies"
        :key="tech.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <v-card class="text-center" height="300">
          <v-col class="col-12 d-flex justify-center">
            <img height="50px" :src="tech.icon" :alt="`${tech.title} icon`" />
          </v-col>
          <v-card-title class="justify-center">{{ tech.title }}</v-card-title>
          <v-card-text>{{ tech.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { mapRoutes } from '../utils/router';
export default Vue.extend({
  data: () => ({
    lang: 'en',
    title: 'About'
  }),
  head() {
    return {
      htmlAttrs: {
        lang: this.lang,
        translate: 'no'
      },
      title: this.title
    };
  },
  computed: {
    ...mapGetters({ language: 'Language/language', text: 'Language/text' })
  },
  created() {
    this.lang = this.language;
    this.title = this.text.Navigation.about;
  },
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.name === 'About') {
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
