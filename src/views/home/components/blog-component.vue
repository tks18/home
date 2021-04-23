<template>
  <div class="column is-full ma-2">
    <v-row>
      <v-col align="start" justify="start">
        <div
          id="home-blogtitle"
          :class="
            'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
            ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
          "
          @click="$router.push('/blog')"
        >
          {{ title }} <v-icon>mdi-arrow-right-circle</v-icon>
        </div>
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
    <div
      ref="posts"
      class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
    >
      <div
        v-for="n in 10"
        :key="n"
        class="scrollable-x-child column ma-0 pa-0 non-touch point-cursor"
      >
        <v-hover>
          <template #default="{ hover }">
            <v-card
              v-ripple
              elevation="3"
              class="mx-2"
              :width="ismobile ? 225 : 250"
              :height="ismobile ? 300 : 325"
            >
              <v-card>
                <v-img
                  src="https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"
                />
              </v-card>
              <v-card-text>
                <h2 class="text-subtitle-1 font-weight-bold primary--text">
                  This is a Lorem Ipsum Post
                </h2>
              </v-card-text>
              <transition name="fade" mode="out-in">
                <v-overlay
                  v-if="hover"
                  absolute
                  z-index="2"
                  opacity="0.4"
                  color="primary"
                  class="back-blur"
                >
                  <v-row class="mx-3">
                    <v-col>
                      <v-row align="start">
                        <div
                          class="text text-body-1 font-weight-bold black--text"
                        >
                          Overview
                        </div>
                      </v-row>
                      <v-row align="start" justify="start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A necessitatibus, molestiae magni deleniti hic
                        natus facilis.
                      </v-row>
                      <v-spacer />
                      <v-row class="mt-1">
                        <v-btn color="primary" small>Read More</v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-overlay>
              </transition>
            </v-card>
          </template>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-eval */
import { scrollTo } from '@p/helpers';

export default {
  name: 'HomeBlogComponent',
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

<style></style>
