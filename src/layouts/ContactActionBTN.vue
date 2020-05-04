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
      <Chat />
    </v-btn>
    <v-dialog v-model="contactOpen">
      <ContactForm :toggle="toggleContact" style="min-height: 60vh" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from '@/components/ContactForm.vue';
//@ts-ignore
import Chat from '~/assets/icons/chat.svg';
export default Vue.extend({
  components: {
    ContactForm,
    Chat
  },
  data: () => ({
    contactOpen: false
  }),
  methods: {
    toggleContact() {
      this.contactOpen = !this.contactOpen;
    }
  }
});
</script>
<style lang="scss" scoped>
.contactActionBTN {
  @media only screen and (max-width: 600px) {
    transform: translateY(-72px);
  }
}
</style>
