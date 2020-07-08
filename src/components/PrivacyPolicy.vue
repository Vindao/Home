<template>
  <v-dialog v-model="privacyPolicyOpen" scrollable max-width="600px">
    <v-card>
      <v-btn icon @click="dialog = false" style="position: absolute; right: 0">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title class="justify-center py-8">{{ $t('Footer.Datenschutz.title') }}</v-card-title>

      <v-card-text v-html="$t('Footer.Datenschutz.html')"></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    privacyPolicyOpen: {
      get() {
        return this.$store.state.UI.privacyPolicyOpen;
      },
      set() {
        this.$store.commit('UI/togglePrivacyPolicy');
      }
    }
  }
});
</script>

<style></style>
