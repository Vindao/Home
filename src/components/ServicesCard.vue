<template>
  <v-card>
    <div class="cardWrapper" :class="{ serviceCardLeft: card.index % 2 }">
      <div class="cardImage" :class="{ left: !(card.index % 2) && $vuetify.breakpoint.mdAndUp }">
        <g-image style="width: 100%; border-radius: 3px" height="250" :src="card.image" />
      </div>
      <div class="cardText" :class="{ left: !(card.index % 2) && $vuetify.breakpoint.lgAndUp }">
        <v-card-title class="justify-center text-center">
          {{ card[`${lang}_title`] }}
        </v-card-title>
        <v-card-text class="text-center">
          {{
            ($vuetify.breakpoint.md || $vuetify.breakpoint.xs) && !expanded
              ? card[`${lang}_text`].slice(0, 200) + '...'
              : card[`${lang}_text`]
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
  props: ['card'],
  components: {
    Expand
  },
  computed: {
    ...mapGetters({ lang: 'Language/language' })
  },
  data: () => ({
    expanded: false
  }),
  mounted() {
    console.log(this.expanded);
  },
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
    grid-template-columns: 6fr 4fr;

    &.serviceCardLeft {
      grid-template-columns: 4fr 6fr;
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
