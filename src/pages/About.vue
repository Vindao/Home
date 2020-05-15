<template>
  <v-container>
    <h1>About</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapRoutes } from '../utils/router';
export default Vue.extend({
  key: to => to.fullPath,
  transition(to, from) {
    if (from && to.name === 'About') {
      const fromN = mapRoutes(from.path);
      const toN = mapRoutes(to.path);
      const back = fromN > toN;
      const swipeSpecial = to.query.swipeSpecial;
      const possible = ['forward', 'backward'];
      if (swipeSpecial) {
        possible.unshift(possible.pop() as string);
      }
      return back ? possible[1] : possible[0];
    }
    return '';
  }
});
</script>
