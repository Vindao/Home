<template>
  <q-card class="contactModal">
    <button class="closeContact" @click="close">x</button>
    <q-form class="contactForm" @submit="onSubmit">
      <q-input
        color="secondary"
        v-model="name"
        type="text"
        label="Name *"
        :rules="[val => validate('name', val)]"
      />
      <q-input
        color="secondary"
        v-model="email"
        type="email"
        label="Email *"
        :rules="[val => validate('email', val)]"
      />
      <q-input
        color="secondary"
        v-model="company"
        label="Company"
        :rules="[val => validate('company', val)]"
      />
      <q-input
        color="secondary"
        v-model="phone"
        type="phone"
        label="Phone"
        :rules="[val => validate('phone', val) || 'Please type something']"
      />
      <q-btn label="Submit" type="submit" color="primary" :loading="loading" />
    </q-form>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact',
  props: {
    close: Function
  },
  data: () => ({
    name: '',
    email: '',
    company: '',
    phone: '',
    disabled: true,
    loading: false
  }),
  methods: {
    onSubmit() {
      this.loading = true;
    },
    validate(type: string, val: string) {
      switch (type) {
        case 'name':
          if (val.match(/^\S+$/)) {
            return true;
          } else if (val.length < 1) {
            return 'length';
          } else {
            return 'do not use spaces';
          }
          break;
        case 'email':
          if (
            !val.match(
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            )
          ) {
            return 'please enter a valid Email address';
          }
        case 'company':
          if (val.match(/^\S+$/) || val.length === 0) {
            return true;
          } else {
            return 'do not use spaces';
          }
          break;
        case 'phone':
          return val.match(/(^$|^([+]?[0-9][\s]?){5,}\w+)/);
          break;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.contactModal {
  position: fixed;
  bottom: calc(
    #{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2)
  );
  left: calc(
    #{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2)
  );
  width: calc(
    100% - 2 *
      (#{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2))
  );
  height: calc(
    100vh -
      (
        2 * (#{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2)) +
          #{$headerExtendedHeight}
      )
  );
  opacity: 0.95;
  background-color: $light;
  @media only screen and(max-width: $breakpoint-sm-max) {
    bottom: calc(
      #{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2) + #{$bottomNavHeight}
    );
    height: calc(
      100vh -
        (
          2 *
            (#{$rootMargin} + #{$contentMargin} + (#{$contactButtonHeight} / 2)) +
            #{$headerHeight} + #{$bottomNavHeight}
        )
    );
  }
  .closeContact {
    height: 1em;
    position: absolute;
    right: $contentMargin;
    top: $contentMargin;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
  }
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
