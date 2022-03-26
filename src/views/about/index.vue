<template>
  <div class="content">
    <div
      id="index-title"
      :class="
        'column is-full text-center text-capitalize text font-weight-bold mt-3 mb-0 pb-0 ' +
        (ismobile ? 'text-h5' : 'text-h4')
      "
    >
      {{ animatedArray.title }}
    </div>
    <v-row align="center" justify="center">
      <v-col
        v-for="(route, index) in subRoutes"
        :key="index"
        align="center"
        cols="12"
      >
        <v-btn color="primary" rounded @click="$router.push(route.link)">
          {{ route.name }}
        </v-btn>
      </v-col>
    </v-row>
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
    subRoutes: [
      {
        name: 'About Me',
        link: '/about/me',
      },
      {
        name: 'About this Project',
        link: '/about/project',
      },
    ],
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
        elem: '#index-title',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('index'),
        arrayProperty: 'title',
      });
    },
  },
};
</script>
