<template>
  <div class="settings">
    <q-icon name="settings" size="2em" class="settingsIcon" @click="toggle" />
    <q-menu v-show="show" fit anchor="bottom right" self="top right">
      <q-item clickable class="text-center">
        <q-item-section>
          <language-picker />
        </q-item-section>
      </q-item>
      <q-item v-show="loggedIn" clickable class="text-center" @click="logout">
        <q-item-section>Logout</q-item-section>
      </q-item>
    </q-menu>
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
.settingsIcons {
  cursor: pointer;
}
</style>