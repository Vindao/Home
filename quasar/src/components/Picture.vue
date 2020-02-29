<template>
  <img class="Sirv" :data-src="imgLink" :alt="alt" :height="height" :width="width" />
</template>

<script>
export default {
  props: {
    imgLink: String,
    alt: String,
    height: String,
    width: String
  }
};
</script>

<style lang="scss" scoped>
img {
  z-index: 1;
}
</style>