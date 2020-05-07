<template>
  <v-card>
    <div class="cardWrapper" :class="{ serviceCardLeft: !(card.id % 2) }">
      <div class="cardImage" :class="{ left: !(card.id % 2) && $vuetify.breakpoint.mdAndUp }">
        <g-image style="width: 100%; border-radius: 3px" height="250" :src="image" />
      </div>
      <div class="cardText" :class="{ left: !(card.index % 2) && $vuetify.breakpoint.lgAndUp }">
        <v-card-title class="justify-center text-center">
          {{ card.title }}
        </v-card-title>
        <v-card-text class="text-center">
          {{
            ($vuetify.breakpoint.md || $vuetify.breakpoint.xs) && !expanded
              ? card.text.slice(0, 200) + '...'
              : card.text
          }}
          <br />
          <br />
          <Expand
            v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.xs"
            :style="{
              transform: `rotateZ(${expanded ? '180deg' : '0deg'})`
            }"
            class="expand"
            @click="toggleExpand"
          />
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
// SVG's
//@ts-ignore
import Expand from '@/assets/icons/expand.svg';

export default Vue.extend({
  props: ['card', 'image'],
  components: {
    Expand
  },

  data: () => ({
    expanded: false
  }),

  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    }
  }
});
</script>

<style lang="scss" scoped>
.cardWrapper {
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 960px) {
    grid-template-columns: 4fr 6fr;

    &.serviceCardLeft {
      grid-template-columns: 6fr 4fr;
    }
  }
  .cardImage {
    grid-row: 1;
    display: flex;
    align-items: center;
    grid-column: 1;
    &.left {
      grid-column: 2;
    }
  }
  .cardText {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.expand {
  cursor: pointer;
}
</style>
