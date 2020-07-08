<template>
  <v-dialog v-model="impressumOpen" scrollable max-width="600px">
    <v-card>
      <v-btn icon @click="impressumOpen = false" style="position: absolute; right: 0">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title class="justify-center py-8">{{ $t('Footer.Impressum.title') }}</v-card-title>
      <br />
      <v-card-text v-html="$t('Footer.Impressum.html')"> </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    impressumOpen: {
      get() {
        return this.$store.state.UI.impressumOpen;
      },
      set() {
        this.$store.commit('UI/toggleImpressum');
      }
    }
  }
});
</script>

<style></style>
