<template>
  <v-footer min-height="200" padless id="footerCaBtn" class="footer" color="secondary">
    <v-container
      class="d-flex flex-column justify-between"
      style="position: absolute; height: 100%; left:0;right:0;"
    >
      <v-row style="height: 90%">
        <v-col class="col-4">
          <v-row>
            <v-col
              class="col-12 py-0 col-sm-4 d-flex justify-start justify-sm-center footerNavLink"
            >
              <nuxt-link style=" text-decoration: none" to="/">{{
                $t('Navigation.home')
              }}</nuxt-link></v-col
            >
            <v-col class="col-12 py-0 col-sm-4 d-flex justify-start justify-sm-center footerNavLink"
              ><nuxt-link style=" text-decoration: none" to="/services">{{
                $t('Navigation.services')
              }}</nuxt-link></v-col
            >
            <v-col class="col-12 py-0 col-sm-4 d-flex justify-start justify-sm-center footerNavLink"
              ><nuxt-link style=" text-decoration: none" to="/about">{{
                $t('Navigation.about')
              }}</nuxt-link></v-col
            >
          </v-row>
        </v-col>
        <v-col class="col-4 d-flex justify-center align-end">
          <v-row>
            <v-col class="col-12 d-flex justify-center pa-0">
              <v-btn
                :small="$vuetify.breakpoint.xs"
                @click="$store.commit('UI/toggleContact')"
                color="primary"
                >{{ $t('Navigation.contact') }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-4">
          <v-row>
            <v-col class="col-12 py-1 d-flex contactInfoCol">
              <a style="text-decoration: none" :href="`mailto:${$t('Footer.contactInfo.email')}`"
                ><p class="ma-0 contactInfoP">
                  {{ $t('Footer.contactInfo.email') }}
                </p></a
              >
            </v-col>
            <v-col class="col-12 py-1 d-flex contactInfoCol">
              <a style="text-decoration: none" :href="`tel:${$t('Footer.contactInfo.phone')}`"
                ><p class="ma-0 contactInfoP">
                  {{ $t('Footer.contactInfo.phone') }}
                </p></a
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="align-end">
        <v-col class="col-4 d-flex flex-column flex-sm-row py-0">
          <v-col class="col-12 col-sm-6 primary--text pa-0 d-flex justify-center">
            <p
              style="cursor: pointer"
              class="ma-0 footerNavLink"
              @click="$store.commit('UI/toggleImpressum')"
            >
              {{ $t('Footer.Impressum.label') }}
            </p>
          </v-col>
          <v-col class="col-12 col-sm-6 primary--text pa-0 d-flex justify-center">
            <p
              style="cursor: pointer"
              class="ma-0 footerNavLink"
              @click="$store.commit('UI/togglePrivacyPolicy')"
            >
              {{ $t('Footer.Datenschutz.label') }}
            </p>
          </v-col>
        </v-col>
        <v-col class="col-4 d-flex justify-center py-0 footerNavLink">
          {{ new Date().getFullYear() }} © <strong> Vindao</strong>
        </v-col>
        <v-col class="col-4 py-0"></v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
export default Vue.extend({
  computed: {
    justifyContactInfo() {
      //@ts-ignore
      return this.$vuetify.breakpoint.smAndUp ? 'justify-center' : 'justify-end';
    }
  },
  methods: {
    ...mapMutations({ openContact: 'UI/toggleContact' })
  }
});
</script>

<style lang="scss" scoped>
.footer {
  @media only screen and (max-width: 600px) {
    margin-bottom: 72px;
  }
  .footerNavLink {
    justify-content: center;
    font-size: 1em;

    @media only screen and (max-width: 800px) {
      font-size: 0.9em;
    }
    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
    }
  }
  .contactInfoCol {
    justify-content: flex-end;
    font-size: 1em;

    @media only screen and (max-width: 600px) {
      font-size: 0.75em;
    }
  }
}
</style>
