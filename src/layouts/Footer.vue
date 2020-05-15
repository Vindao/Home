<template>
  <v-footer padless id="footerCaBtn" class="footer" color="secondary">
    <v-container>
      <v-row>
        <v-col class="col-5">
          <v-row :justify="$vuetify.breakpoint.smAndUp ? 'center' : 'start'" align="center">
            <v-col class="col-12 col-md-4 d-flex footerNavLink">
              <nuxt-link style=" text-decoration: none" to="/">{{
                text.Navigation.home
              }}</nuxt-link></v-col
            >
            <v-col class="col-12 col-md-4 d-flex footerNavLink"
              ><nuxt-link style=" text-decoration: none" class="footerLink" to="/services">{{
                text.Navigation.services
              }}</nuxt-link></v-col
            >
            <v-col class="col-12 col-md-4 d-flex footerNavLink"
              ><nuxt-link style=" text-decoration: none" class="footerLink" to="/about">{{
                text.Navigation.about
              }}</nuxt-link></v-col
            >
          </v-row>
        </v-col>
        <v-col class="col-2 d-flex justify-center align-end">
          <v-row>
            <v-col class="col-12 d-flex justify-center">
              <v-btn
                :small="$vuetify.breakpoint.xs"
                @click="$store.commit('UI/toggleContact')"
                color="primary"
                >{{ text.Navigation.contact }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-5">
          <v-row>
            <v-col class="col-12 py-1 d-flex contactInfoCol">
              <a style="text-decoration: none" :href="`mailto:${text.Footer.contactInfo.email}`"
                ><p class="ma-0 contactInfoP">
                  {{ text.Footer.contactInfo.email }}
                </p></a
              >
            </v-col>
            <v-col class="col-12 py-1 d-flex contactInfoCol">
              <a style="text-decoration: none" :href="`tel:${text.Footer.contactInfo.phone}`"
                ><p class="ma-0 contactInfoP">
                  {{ text.Footer.contactInfo.phone }}
                </p></a
              >
            </v-col>
            <v-col class="col-12 py-0 d-flex contactInfoCol">
              <p class="ma-0  contactInfoP primary--text">
                {{ text.Footer.contactInfo.adress.line1 }}
              </p>
            </v-col>
            <v-col class="col-12 py-0 d-flex contactInfoCol">
              <p class="ma-0  contactInfoP primary--text">
                {{ text.Footer.contactInfo.adress.line2 }}
              </p> </v-col
            ><v-col class="col-12 py-0 d-flex contactInfoCol">
              <p class="ma-0 contactInfoP primary--text">
                {{ text.Footer.contactInfo.adress.line3 }}
              </p>
            </v-col>
            <v-col class="col-12 py-0 d-flex contactInfoCol">
              <p class="ma-0 contactInfoP primary--text">
                {{ text.Footer.contactInfo.adress.line4 }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12 d-flex justify-center">
          {{ new Date().getFullYear() }} © <strong> Vindao</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
//@ts-ignore
import Chat from '~/assets/icons/chat.svg';
import { mapGetters, mapMutations } from 'vuex';
export default Vue.extend({
  components: { Chat },
  computed: {
    ...mapGetters({ text: 'Language/text' }),
    justifyContactInfo() {
      //@ts-ignore
      return this.$vuetify.breakpoint.smAndUp ? 'justify-center' : 'justify-end';
    },
    justifyNavigation() {
      //@ts-ignore
      return this.$vuetify.breakpoint.smAndUp ? 'justify-center' : 'justify-start';
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
    justify-content: flex-start;
    font-size: 0.75em;

    @media only screen and (min-width: 600px) {
      justify-content: center;
      font-size: 1em;
    }
  }
  .contactInfoCol {
    justify-content: flex-end;
    font-size: 0.75em;

    @media only screen and (min-width: 600px) {
      justify-content: center;
      font-size: 1em;
    }
    // .contactInfoP {
    //   @media only screen and (max-width: 600px) {
    //     font-size: 0.75em;
    //   }
    // }
  }
}
</style>
