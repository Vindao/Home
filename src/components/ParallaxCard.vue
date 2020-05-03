<template>
  <div ref="card" class="wrapper" @mouseleave="Left" @mousemove="Moved">
    <div class="card" :style="cardStyle">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
//@ts-nocheck
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    width: null,
    height: null,
    left: 0,
    top: 0,
    mouseX: 0,
    mouseY: 0,
  }),
  computed: {
    cardStyle() {
      return {
        // transform: `rotate3d(${this.mouseY * -1}, ${this.mouseX}, 0, 15deg)`,
        transform: `rotateX(${this.mouseY * -10}deg) rotateY(${this.mouseX * 10}deg)`,
      };
    },
  },
  methods: {
    Moved(e) {
      if (!this.height || !this.width) {
        this.height = this.$refs.card.clientHeight;
        this.width = this.$refs.card.clientWidth;
      }
      const halfHeight = this.height / 2;
      const halfWidth = this.width / 2;
      this.mouseX = (e.layerX - halfWidth) / halfWidth;
      this.mouseY = (e.layerY - halfHeight) / halfHeight;
    },
    Left() {
      this.mouseX = 0;
      this.mouseY = 0;
    },
  },
});
</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
.wrapper {
  perspective: 500px;
  transform-style: preserve-3d;
  cursor: pointer;
  .card {
    &:hover {
      // transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
    }
    &:not(:hover) {
      transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}
</style>
