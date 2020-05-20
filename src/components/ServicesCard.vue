<template>
  <v-card>
    <div class="cardWrapper" :class="{ serviceCardLeft: !(card.id % 2) }">
      <div class="cardImage">
        <Img
          :src="card.image.src"
          :placeholder="card.image.placeholder"
          sizes="(min-width: 960px) 30vw, 90vw"
          :alt="card.image.alt"
          fill="w"
        />
      </div>
      <div class="cardText" :class="{ left: !(card.index % 2) && $vuetify.breakpoint.lgAndUp }">
        <v-card-title class="justify-center text-center">
          {{ card.title }}
        </v-card-title>
        <v-card-text class="text-center">
          {{
            ($vuetify.breakpoint.md || $vuetify.breakpoint.xs) && !expanded
              ? card.text.slice(0, 200) + '...'
              : card.text.length > 400 && !expanded
              ? card.text.slice(0, 300) + '...'
              : card.text
          }}
          <br />
          <br />
          <v-icon
            v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.xs || card.text.length > 400"
            :style="{
              transform: `rotateZ(${expanded ? '180deg' : '0deg'})`
            }"
            class="expand"
            @click="toggleExpand"
          >
            expand_more
          </v-icon>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Img from '@/components/Image.vue';
export default Vue.extend({
  components: {
    Img
  },
  props: ['card'],

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
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    &.serviceCardLeft {
      flex-direction: row-reverse;
    }
  }
  .cardImage {
    display: flex;
    align-items: center;
    height: 500px;
    width: 100%;
    overflow: hidden;
    @media only screen and (min-width: 960px) {
      width: 40%;
      height: auto;
    }
    @media only screen and (min-width: 1264px) {
      height: 280px;
    }
    @media only screen and (max-width: 870px) {
      height: 400px;
    }
    @media only screen and (max-width: 700px) {
      height: 300px;
    }
    @media only screen and (max-width: 550px) {
      height: 200px;
    }
    @media only screen and (max-width: 400px) {
      height: 150px;
    }
  }
  .cardText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @media only screen and (min-width: 960px) {
      width: 60%;
    }
  }
}
.expand {
  cursor: pointer;
}
</style>
