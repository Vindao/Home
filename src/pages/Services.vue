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
      <v-col class="col-12" v-for="edge in $static.allCard.edges" :key="edge.node.id">
        <services-card :card="edge.node" />
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
query {
  allCard(sortBy:"index", order:ASC) {
    edges{
      node{
        index
        en_title
        de_title
        nl_title
        de_text
        en_text
        nl_text
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
  }
});
</script>

<style lang="scss" scoped></style>
