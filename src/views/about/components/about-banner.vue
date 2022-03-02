<template>
  <div class="column">
    <div
      id="about-banner-title"
      class="column is-full text-capitalize text-h2 font-weight-bold"
    >
      {{ animatedArray.title }}
    </div>
  </div>
</template>

<script>
import gsap from '@p/gsap';
import { ismobile } from '@p/helpers';
import { generateWordMaps } from '@p/wordmap';

export default {
  name: 'ComponentName',
  data: () => ({
    animatedArray: {
      title: ' ',
    },
  }),
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      gsap.tweenToObserver({
        vm: this,
        elem: '#about-banner-title',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('About Me'),
        arrayProperty: 'title',
      });
    },
  },
};
</script>
