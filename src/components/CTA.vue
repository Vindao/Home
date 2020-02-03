<template>
  <div class="CTA flex justify-center">
    <q-btn to="/services" color="secondary">See more</q-btn>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.CTA {
  min-height: calc((100vh - #{$headerHeight} - #{$bottomNavHeight}) * 0.618);
}
</style>