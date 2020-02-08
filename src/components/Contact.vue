<template>
  <q-card class="contactModal">
    <q-form class="contactForm">
      <q-input
        color="secondary"
        dark
        v-model="name"
        type="text"
        label="Name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        color="secondary"
        dark
        v-model="email"
        type="email"
        label="Email *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        color="secondary"
        dark
        v-model="company"
        label="Company"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        color="secondary"
        dark
        v-model="phone"
        type="phone"
        label="Phone"
        :rules="[val => validate('phone', val) || 'Please type something']"
      />
    </q-form>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact',
  data: () => ({
    name: '',
    email: '',
    company: '',
    phone: ''
  }),
  methods: {
    validate(type: string, val: string) {
      switch (type) {
        case 'phone':
          return val.match(/[+]?([0-9])([\s-]?)\w+/);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.contactModal {
  position: fixed;
  top: calc(#{$headerHeight} + #{$rootMargin});
  left: $rootMargin;
  width: calc(100% - 2 * #{$rootMargin});
  height: calc(
    100vh - (2 * #{$rootMargin} + #{$headerHeight} + #{$bottomNavHeight})
  );
  opacity: 0.95;
  background-color: $dark;
  .contactForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
