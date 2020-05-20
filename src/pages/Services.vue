<template>
  <v-container v-touch="{ left: () => swipe('left'), right: () => swipe('right') }">
    <v-row>
      <v-col class="col-12">
        <v-card>
          <v-card-title class="justify-center text-center">
            {{ text.Services.Hero.title }}
          </v-card-title>
          <v-card-text class="text-center">
            {{ text.Services.Hero.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12" v-for="card in text.Services.Cards" :key="card.id">
        <services-card :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapRoutes } from '../utils/router';

// components
import ServicesCard from '~/components/ServicesCard.vue';
// vuex
import { mapGetters } from 'vuex';
export default Vue.extend({
  components: {
    ServicesCard
  },
  computed: {
    ...mapGetters({ text: 'Language/text', language: 'Language/language' })
  },
  data: () => ({
    lang: 'en',
    title: 'Services'
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
  created() {
    this.lang = this.language;
    this.title = this.text.Navigation.services;
  },
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.name === 'Services') {
      const fromN = mapRoutes(from.path);
      const toN = mapRoutes(to.path);
      return toN < fromN ? 'backward' : 'forward';
    }
    return '';
  }
});
</script>

<style lang="scss" scoped></style>
