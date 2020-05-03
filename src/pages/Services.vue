<template>
  <Layout>
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
          <v-card v-if="!(card.id % 2) && !$vuetify.breakpoint.xs">
            <v-row align="center">
              <v-col class="col-12 col-sm-7" fill-height>
                <v-card-title style="top: 0;" class="justify-center">
                  {{ card.title }}
                </v-card-title>
                <v-card-text class="justify-center">
                  {{ card.text }}
                </v-card-text>
              </v-col>
              <v-col class="col-12 col-sm-5 pt-0 pb-0">
                <v-img :src="card.img" :lazy-src="card.lazyImg"> </v-img>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-else>
            <v-row align="center">
              <v-col class="col-12 col-sm-5 pt-0 pb-0">
                <v-img :src="card.img" :lazy-src="card.lazyImg"> </v-img>
              </v-col>
              <v-col class="col-12 col-sm-7">
                <v-card-title style="top: 0;" class="justify-center">
                  {{ card.title }}
                </v-card-title>
                <v-card-text class="justify-center">
                  {{ card.text }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { mapRoutes } from '../utils/router';

export default Vue.extend({
  data: () => ({
    cards: [
      {
        title: 'One application for all your devices',
        text: `Progressive web applications are a new technology which brings native-like applications
            to the web. It is a game changer because it enables us to create integrated applications
            for all devices with one single codebase.`,
        img:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_auto/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png'
      },
      {
        title: 'One application for all your devices',
        text: `Progressive web applications are a new technology which brings native-like applications
            to the web. It is a game changer because it enables us to create integrated applications
            for all devices with one single codebase.`,
        img:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_auto/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png',

        lazyImg:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_10/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png'
      },
      {
        title: 'One application for all your devices',
        text: `Progressive web applications are a new technology which brings native-like applications
            to the web. It is a game changer because it enables us to create integrated applications
            for all devices with one single codebase.`,
        img:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_auto/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png',
        lazyImg:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_10/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png'
      },
      {
        title: 'One application for all your devices',
        text: `Progressive web applications are a new technology which brings native-like applications
            to the web. It is a game changer because it enables us to create integrated applications
            for all devices with one single codebase.`,
        img:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_auto/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png',
        lazyImg:
          'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto,q_10/v1588126230/Vindao%20Home/responsive-2044932_zjwjbn.png'
      }
    ]
  }),
  computed: {
    ...mapGetters({ text: 'Language/text' })
  }
  //   methods: {
  //     swipe(direction: string) {
  //       if (direction === 'left') {
  //         this.$router.push('/about');
  //       } else {
  //         this.$router.push('/');
  //       }
  //     }
  //   }
});
</script>

<style></style>
