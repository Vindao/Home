<template>
  <v-container v-touch="{ left: () => swipe('left'), right: () => swipe('right') }">
    <v-row>
      <v-col class="col-12">
        <v-card>
          <v-card-title class="justify-center text-center">
            {{ text.Services.Hero.title }}
          </v-card-title>
          <v-card-text>
            {{ text.Services.Hero.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12" v-for="card in text.Services.Cards" :key="card.id">
        <services-card :card="card" :image="$static.allCard.edges[card.id - 1].node.image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
query {
  allCard(sortBy:"index", order:ASC) {
    edges{
      node{
        image
      }
    }
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';
// components
import ServicesCard from '@/components/ServicesCard.vue';
// vuex
import { mapGetters } from 'vuex';

export default Vue.extend({
  components: {
    ServicesCard
  },
  computed: {
    ...mapGetters({ text: 'Language/text' })
  },
  mounted() {
    //@ts-ignore
    console.log(this.$static.allCard.edges);
  }
});
</script>

<style lang="scss" scoped></style>
