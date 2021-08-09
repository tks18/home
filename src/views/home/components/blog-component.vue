<template>
  <div class="column is-full ma-2">
    <v-row>
      <v-col align="start" justify="start">
        <h-title-component
          id="blogtitle"
          :title="title"
          arrow="right"
          link="/blog"
          :large="false"
          :center="false"
          :darker="false"
        />
      </v-col>
      <v-col align="end" justify="start" class="mr-4">
        <v-btn icon color="primary" @click="swipeLeft('posts')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn icon color="primary" @click="swipeRight('posts')">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-skeleton-loader type="card" max-width="300" class="mx-auto" />
        <div class="text-body-1">
          Blog Posts Under Construction, I will Come Striking
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable no-eval */
import { scrollTo } from '@p/helpers';
import title_component from '@v/home/components/common/title-component';

export default {
  name: 'HomeBlogComponent',
  components: {
    'h-title-component': title_component,
  },
  props: {
    title: {
      type: String,
      default: ' ',
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {},
  methods: {
    swipeLeft(func) {
      const content = `this.$refs.${func}`;
      scrollTo(eval(content), -400, 300);
    },
    swipeRight(func) {
      const content = `this.$refs.${func}`;
      scrollTo(eval(content), 400, 300);
    },
  },
};
</script>
