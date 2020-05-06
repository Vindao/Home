<template>
  <v-app-bar app sticky color="secondary" prominent>
    <v-container fluid fill-height>
      <h1 id="testLang"></h1>
      <v-row no-gutters>
        <v-col cols="2"
          ><v-toolbar-title top><Logo /></v-toolbar-title
        ></v-col>
        <v-col cols="10">
          <LanguagePicker />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2"> </v-col>
        <v-col cols="8" align-self="end">
          <v-tabs
            centered
            color="primary"
            background-color="transparent"
            grow
            class="hidden-xs-only"
            style="transform: translateY(16px);"
          >
            <v-tab to="/">
              {{ text.Navigation.home }}
            </v-tab>
            <v-tab to="/services"> {{ text.Navigation.services }} </v-tab
            ><v-tab to="/about">
              {{ text.Navigation.about }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="2" align-self="end">
          <v-row justify="end">
            <v-switch
              hide-details
              width="20px"
              height="20px"
              align-self
              label=""
              v-model="theme"
            ></v-switch>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Logo from './Logo.vue';
import LanguagePicker from './LanguagePicker.vue';
export default Vue.extend({
  components: {
    Logo,
    LanguagePicker
  },
  data: () => ({
    theme: false
  }),
  computed: {
    ...mapGetters({ text: 'Language/text' })
  },
  watch: {
    theme() {
      //@ts-ignore
      this.$vuetify.theme.dark = this.theme;
    }
  }
});
</script>

<style lang="scss" scoped></style>
