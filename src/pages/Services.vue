<template>
  <v-container>
    <v-row>
      <v-col class="col-12">
        <v-card>
          <v-card-title class="justify-center text-center">
            {{ $t('Services.Hero.title') }}
          </v-card-title>
          <v-card-text class="text-center">
            {{ $t('Services.Hero.text') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12" v-for="card in $t('Services.Cards')" :key="card.id">
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
export default Vue.extend({
  components: {
    ServicesCard
  },

  data: () => ({
    title: 'Services'
  }),
  head() {
    return {
      title: this.title
    };
  },
  created() {
    this.title = this.$t('Navigation.services');
  },
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.path === '/services') {
      const fromN = mapRoutes(from.path);
      const toN = mapRoutes(to.path);
      return toN < fromN ? 'backward' : 'forward';
    }
    return '';
  }
});
</script>

<style lang="scss" scoped></style>
