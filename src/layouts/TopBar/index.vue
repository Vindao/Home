<template>
  <v-app-bar prominent app sticky color="secondary">
    <v-container fluid fill-height>
      <h1 id="testLang"></h1>
      <v-row no-gutters>
        <v-col v-if="!$vuetify.breakpoint.xs" class="col-6"
          ><v-toolbar-title style="padding:0"><Logo /></v-toolbar-title
        ></v-col>
        <v-col class="col-12 col-sm-6">
          <LanguagePicker />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="col-10 col-sm-2">
          <v-toolbar-title style="padding:0" v-if="$vuetify.breakpoint.xs"><Logo /></v-toolbar-title
        ></v-col>
        <v-col v-if="!$vuetify.breakpoint.xs" cols="8" align-self="end">
          <v-tabs
            centered
            color="primary"
            background-color="transparent"
            grow
            class="hidden-xs-only"
            style="transform: translateY(17px);"
          >
            <v-tab to="/">
              {{ $t('Navigation.home') }}
            </v-tab>
            <v-tab to="/services"> {{ $t('Navigation.services') }} </v-tab
            ><v-tab to="/about">
              {{ $t('Navigation.about') }}
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

  watch: {
    theme() {
      //@ts-ignore
      this.$vuetify.theme.dark = this.theme;
    }
  }
});
</script>

<style lang="scss" scoped></style>
