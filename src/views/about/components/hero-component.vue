<template>
  <div class="column is-full">
    <div
      :style="{
        background: 'center',
        backgroundImage: mainBg,
        backgroundSize: 'cover',
        height: ismobile ? '200px' : '450px',
        minWidth: '100%',
      }"
      class="hero non-touch"
    >
      <div id="about-initscroll" class="hero-body">
        <v-row v-if="!ismobile">
          <v-col :cols="ismobile ? 12 : 5" align="left" justify="center">
            <div class="back-blur white--text pa-2 fit-text">
              <div
                :class="
                  (ismobile ? 'text-h4 text-center' : 'text-h2') +
                  ' font-weight-black'
                "
              >
                Come face to face Huh?
              </div>
            </div>
          </v-col>
          <v-spacer />
          <v-col
            :cols="ismobile ? 12 : 5"
            :align="ismobile ? 'center' : 'right'"
            justify="center"
          >
            <div class="back-blur white--text pa-2 fit-text">
              <div
                :class="
                  (ismobile ? 'text-center' : '') +
                  'text-overline font-weight-bold'
                "
              >
                "Before picking fights, learn to assess your opponents."
              </div>
              <div class="text-body-2 text-right font-weight-light">
                - Tamuna Tsertsvadze, Galaxy Pirates
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="hero-footer">
        <v-row align="end" class="py-1 px-1">
          <v-col cols="12" align="center" justify="center" class="py-0">
            <div class="back-blur fit-text px-2 text-overline font-weight-bold">
              <span
                :class="
                  ($vuetify.theme.dark ? 'grad-back-dark' : 'grad-back-light') +
                  ' pa-2'
                "
              >
                {{ animatedArray.hashTag }}
              </span>
              <span class="white--text"> {{ ' Squad' }} </span>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { generateWordMapsReverse } from '@p/wordmap';
import { tweenToRev } from '@p/gsap';

export default {
  name: 'AboutHeroComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    mainBg: "url('https://i.ibb.co/DVtbmxt/ezgif-6-6fa4128fb00b.webp')",
    animatedArray: {
      hashTag: ' ',
    },
  }),
  mounted() {
    tweenToRev({
      vm: this,
      emoji: false,
      arrayName: 'animatedArray',
      map: generateWordMapsReverse('#keanureeves', ' #john wick '),
      arrayProperty: 'hashTag',
    });
  },
};
</script>

<style></style>
