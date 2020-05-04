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
          <!-- <v-card height="250" v-if="edge.node.index % 2 && !$vuetify.breakpoint.xs">
            <v-container fill-height class="pt-0 pb-0">
              <v-row align="center" style="height: 100%">
                <v-col class="col-12 col-sm-7 ">
                  <v-card-title style="top: 0;" class="justify-center">
                    {{ edge.node[`${lang}_title`] }}
                  </v-card-title>
                  <v-card-text class="justify-center">
                    {{ edge.node[`${lang}_text`] }}
                  </v-card-text>
                </v-col>
                <v-col
                  class="col-12 col-sm-5 pa-0"
                  :style="{
                    height: `100%`,
                    backgroundImage: `url(${edge.node.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }"
                  align="center"
                >
                </v-col>
              </v-row>
            </v-container>
          </v-card> -->

          <v-container
            v-if="!(edge.node.index % 2) && (!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm)"
          >
            <v-card>
              <v-list-item class="px-0">
                <v-row>
                  <v-col class="col-12 col-md-7 text-center">
                    <v-list-item-content>
                      <v-card-title style="top: 0;" class="justify-center">
                        {{ edge.node[`${lang}_title`] }}
                      </v-card-title>
                      <v-card-text class="justify-center">
                        {{
                          readMore.includes(edge.node.index)
                            ? edge.node[`${lang}_text`]
                            : edge.node[`${lang}_text`].slice(0, 200) + '...'
                        }}
                        <br />
                      </v-card-text>
                    </v-list-item-content>
                    <Expand
                      :style="{
                        transform: `rotateZ(${
                          readMore.includes(edge.node.index) ? '180deg' : '0deg'
                        })`
                      }"
                      class="expand"
                      @click="
                        !readMore.includes(edge.node.index)
                          ? readMore.push(edge.node.index)
                          : (readMore = readMore.filter(x => x !== edge.node.index))
                      "
                    />
                  </v-col>
                  <v-col class="col-12 col-md-5 py-0">
                    <v-list-item-content class="pa-0" style="height: 100%">
                      <g-image style="width: 100%" :src="edge.node.image"></g-image>
                    </v-list-item-content>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-card>
          </v-container>
          <v-container v-else>
            <v-card>
              <v-list-item class="px-0">
                <v-row>
                  <v-col class="col-12 col-md-5 py-0">
                    <v-list-item-content class="pa-0" style="height: 100%">
                      <g-image style="width: 100%" :src="edge.node.image"></g-image>
                    </v-list-item-content>
                  </v-col>
                  <v-col class="col-12 col-md-7 text-center">
                    <v-list-item-content>
                      <v-card-title style="top: 0;" class="justify-center">
                        {{ edge.node[`${lang}_title`] }}
                      </v-card-title>
                      <v-card-text class="justify-center">
                        {{
                          readMore.includes(edge.node.index)
                            ? edge.node[`${lang}_text`]
                            : edge.node[`${lang}_text`].slice(0, 150) + '...'
                        }}
                        <br />
                      </v-card-text>
                    </v-list-item-content>
                    <Expand
                      :style="{
                        transform: `rotateZ(${
                          readMore.includes(edge.node.index) ? '180deg' : '0deg'
                        })`
                      }"
                      class="expand"
                      @click="
                        !readMore.includes(edge.node.index)
                          ? readMore.push(edge.node.index)
                          : (readMore = readMore.filter(x => x !== edge.node.index))
                      "
                    />
                  </v-col>
                </v-row>
              </v-list-item>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
import { mapGetters } from 'vuex';
import { mapRoutes } from '../utils/router';
//@ts-ignore
import Expand from '@/assets/icons/expand.svg';

export default Vue.extend({
  components: {
    Expand
  },
  data: () => ({
    readMore: [] as string[]
  }),
  computed: {
    ...mapGetters({ lang: 'Language/language', text: 'Language/text' })
  },
  mounted() {
    //@ts-ignore
    console.log(this.lang);
  }
});
</script>

<style lang="scss" scoped>
.expand {
  cursor: pointer;
}
</style>
