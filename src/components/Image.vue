<template>
  <img
    :sizes="sizes"
    ref="lazyImg"
    :style="fillStyle"
    style="filter: blur(15px)"
    :src="placeholder"
    class="lazyload"
    :alt="alt"
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    src: Object,
    placeholder: String,
    alt: String,
    sizes: String,
    fill: String
  },
  data: () => ({
    fillStyle: 'width: 100%; height: auto'
  }),
  created() {
    switch (this.fill) {
      case 'h':
        this.fillStyle = 'height: 100%; width: auto';
        break;
      default:
        this.fillStyle = 'width: 100%; height: auto';
    }
  },
  mounted() {
    //@ts-ignore
    this.$refs.lazyImg.onload = () => {
      console.log('placeholder loaded');
    };
    const wholeImg = new Image();
    //@ts-ignore
    wholeImg.style = this.fillStyle;
    wholeImg.onload = () => {
      console.log('bigImage loaded');
      console.log(Date.now());
      //@ts-ignore
      const parent = this.$refs.lazyImg.parentNode;
      //@ts-ignore
      parent.removeChild(this.$refs.lazyImg);
      //@ts-ignore
      parent.appendChild(wholeImg);
    };
    wholeImg.srcset = this.src.srcSet;
    wholeImg.src = this.src;
  }
});
</script>

<style lang="scss" scoped>
.picture {
  display: flex;
  align-items: center;
  justify-content: center;

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 3px;
    }
  }
}
</style>
