<template>
  <div class="settings">
    <language-picker />
    <q-item v-if="loggedIn" clickable @click="logout">
      <q-item-section>
        <q-item-label>logout</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
// components
import LanguagePicker from './LanguagePicker.vue';
export default Vue.extend({
  name: 'Settings',
  components: {
    LanguagePicker
  },
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    toggle() {
      this.show = !this.show;
    }
  }
});
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  align-items: center;
}
</style>