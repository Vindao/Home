<template>
  <q-btn class="submitBtn" :label="label" type="submit" color="primary" :loading="loading" />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    label: String,
    loading: Boolean
  }
});
</script>

<style lang="scss" scoped>
.submitBtn {
  width: 12em;
  height: 3em;
}
</style>
