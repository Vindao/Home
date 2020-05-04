<template>
  <div class="homeWrapper">
    <g-image class="bgImage" src="~/assets/images/background.svg"></g-image>
    <v-container fill-height>
      <v-row>
        <v-col class="col-12 text-center align-center" height="100%" style="z-index: 1;">
          <h1 class="heroHeader mb-5">Creating the next generation of apps</h1>
          <p>
            We are specialized in the creation of progressive web apps. These applications are
            distributed via the browser, but still offer device specific features.
          </p>
        </v-col>
      </v-row>
      <v-row class="hidden-xs-only">
        <v-col class="col-4">
          <ParallaxCard>
            <v-card slot="content" dark>
              <v-img
                height="20vh"
                src="https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/computer-1343393_kvmgp6"
              >
                <v-row>
                  <v-col cols="12">
                    <v-card-title class="justify-center mt-5">
                      Services
                    </v-card-title>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </ParallaxCard>
        </v-col>
        <v-col class="col-4">
          <ParallaxCard>
            <v-card slot="content">
              <v-img
                height="20vh"
                src="https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/computer-1343393_kvmgp6"
              >
                <v-row>
                  <v-col cols="12">
                    <v-card-title class="justify-center mt-5">
                      Contact
                    </v-card-title>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </ParallaxCard>
        </v-col>
        <v-col class="col-4">
          <ParallaxCard>
            <v-card slot="content" dark height="20vh">
              <v-img
                height="20vh"
                src="https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/computer-1343393_kvmgp6"
              >
                <v-row>
                  <v-col cols="12">
                    <v-card-title class="justify-center mt-5">
                      About
                    </v-card-title>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </ParallaxCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ParallaxCard from '@/components/ParallaxCard.vue';
export default Vue.extend({
  components: {
    ParallaxCard
  }
});
</script>

<style lang="scss" scoped>
.homeWrapper {
  height: 100%;
  // background-image: url('/images/background.svg');
  // background-size: cover;

  h1 {
    font-size: 1.75em;
  }
  .bgImage {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
  }
}
</style>
