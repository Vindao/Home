<template>
  <div>
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
          <v-card v-if="edge.node.index % 2 && !$vuetify.breakpoint.xs">
            <v-row align="center">
              <v-col class="col-12 col-sm-7" fill-height>
                <v-card-title style="top: 0;" class="justify-center">
                  {{ edge.node[`${lang}_title`] }}
                </v-card-title>
                <v-card-text class="justify-center">
                  {{ edge.node[`${lang}_text`] }}
                </v-card-text>
              </v-col>
              <v-col class="col-12 col-sm-5 pt-0 pb-0">
                <v-row align="center">
                  <g-image style="width: 100%" :src="edge.node.image"> </g-image>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-else>
            <v-row align="center">
              <v-col class="col-12 col-sm-5 pt-0 pb-0 " align="center">
                <v-row align="center">
                  <g-image style="width: 100%" :src="edge.node.image"> </g-image>
                </v-row>
              </v-col>
              <v-col class="col-12 col-sm-7">
                <v-card-title style="top: 0;" class="justify-center">
                  {{ edge.node[`${lang}_title`] }}
                </v-card-title>
                <v-card-text class="justify-center">
                  {{ edge.node[`${lang}_text`] }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<static-query>
query {
  allCard(sortBy:"ID") {
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
import { mapGetters } from 'vuex';
import { mapRoutes } from '../utils/router';

export default Vue.extend({
  computed: {
    ...mapGetters({ lang: 'Language/language', text: 'Language/text' })
  },
  mounted() {
    //@ts-ignore
    console.log(this.lang);
  }
});
</script>

<style></style>
