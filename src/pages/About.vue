<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-center text-center">
        {{ $t('About.hero.title') }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ $t('About.hero.paragraph') }}
      </v-card-text>
    </v-card>
    <v-card-title class="justify-center text-center mt-2" style="font-size: 2em;">{{
      $t('About.technologies.title')
    }}</v-card-title>
    <v-row>
      <v-col
        v-for="tech in $t('About.technologies.technologies')"
        :key="tech.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <v-card class="text-center" height="300">
          <v-col class="col-12 d-flex justify-center">
            <img
              height="50px"
              :src="require(`../assets/icons/${tech.icon}`)"
              :alt="`${tech.title} icon`"
            />
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
import { mapRoutes } from '../utils/router';
export default Vue.extend({
  data: () => ({
    title: 'About'
  }),
  head() {
    return {
      title: this.title
    };
  },

  created() {
    this.title = this.$t('Navigation.about');
  },
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.path === '/about') {
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
