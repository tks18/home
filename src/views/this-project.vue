<template>
  <div class="my-2 mx-2">
    <div
      id="this-project-main-title"
      :class="
        (ismobile ? ' text-h5 ' : ' text-h4 ') +
        'text-center non-touch font-weight-bold text-capitalize'
      "
    >
      {{ animatedText.mainTitle }}
    </div>
    <div class="non-touch text-subtitle-2 darken-3 text-center">
      "Carve your name on hearts, not tombstones." Let you Know my Legacy. Lol
      xD 😜
    </div>
    <div class="mx-2 my-2">
      <v-row>
        <v-col cols="12">
          <v-row class="non-touch">
            <div
              id="this-project-details-title"
              :class="
                (ismobile ? ' text-h6 ' : ' text-h5 ') +
                'font-weight-bold mx-3 text-capitalize' +
                ($vuetify.theme.dark
                  ? ' underhover-light '
                  : ' underhover-dark ')
              "
            >
              {{ animatedText.detailsTitle }}
              <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { generateWordMaps } from '@p/wordmap';
import { tweenToObserver } from '@p/gsap';
import { ismobile } from '@p/helpers';
export default {
  metaInfo: function () {
    return {
      title: 'About This Project',
    };
  },
  data: function () {
    return {
      animatedText: {
        mainTitle: '',
        detailsTitle: '',
      },
    };
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    tweenToObserver({
      vm: this,
      elem: '#this-project-main-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('About This Project'),
      arrayProperty: 'mainTitle',
    });
    tweenToObserver({
      vm: this,
      elem: '#this-project-details-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('Project Details'),
      arrayProperty: 'detailsTitle',
    });
  },
};
</script>

<style></style>
