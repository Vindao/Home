<template>
  <div>
    <v-btn
      fixed
      x-large
      fab
      bottom
      right
      color="accent"
      class="ma-2 ma-md-12 ma-lg-20 contactActionBTN"
      @click="toggleContact"
    >
      <v-icon>mdi-message-text</v-icon>
    </v-btn>
    <v-dialog v-model="contactOpen" max-width="600px">
      <ContactForm :toggle="toggleContact" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from './ContactForm.vue';
export default Vue.extend({
  components: {
    ContactForm,
  },
  data: () => ({
    contactOpen: false,
  }),
  methods: {
    toggleContact() {
      this.contactOpen = !this.contactOpen;
    },
  },
});
</script>
<style lang="scss" scoped>
.contactActionBTN {
  @media only screen and (max-width: 600px) {
    transform: translateY(-72px);
  }
}
</style>
