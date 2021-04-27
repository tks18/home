<template>
  <div class="content">
    <div
      id="$TM_FILENAME_BASE-title"
      :class="
        'column is-full text-center text-capitalize text font-weight-bold mt-3 mb-0 pb-0 ' +
        (ismobile ? 'text-h5' : 'text-h4')
      "
    >
      {{ animatedArray.title }}
    </div>
  </div>
</template>

<script>
import gsap from '@p/gsap';
import { ismobile } from '@p/helpers';

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
        elem: '#$TM_FILENAME_BASE-title',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('$TM_FILENAME_BASE'),
        arrayProperty: 'title',
      });
    },
  },
};
</script>
