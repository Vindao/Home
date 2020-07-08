<template>
  <div style="height: 100%; width: 100%; overflow:hidden">
    <picture>
      <source :srcset="webpSrcset" />
      <source :srcset="srcSet" />
      <img
        style="min-height: 100%; width: 100%; margin: o auto;"
        :src="source"
        :srcset="srcSet"
        :alt="alt"
      />
    </picture>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    imageData: String,
    alt: String
  },
  data: () => ({
    webpSrcset: '',
    srcSet: '',
    source: ''
  }),

  async created() {
    //@ts-ignore
    const sources = await import('~/data/images/responsive.json').then(
      json => json.default || json
    );

    //@ts-ignore
    for (let type in sources) {
      //@ts-ignore
      let i = 0;
      //@ts-ignore
      for (let size in sources[type]) {
        if (type === 'webp') {
          if (i !== 0) {
            this.webpSrcset += ', ';
          }
          //@ts-ignore
          this.webpSrcset += `${sources[type][size]} ${size}w`;
        } else {
          if (i !== 0) {
            this.srcSet += ', ';
          }
          //@ts-ignore
          this.srcSet += `${sources[type][size]} ${size}w`;
          //@ts-ignore
          if (i === Object.keys(sources[type]).length - 1) {
            //@ts-ignore
            this.source = sources[type][size];
          }
        }
        i++;
      }
    }
  }
});
</script>

<style></style>
