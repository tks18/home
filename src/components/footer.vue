<template>
  <v-footer class="non-touch" elevation="22" inset dense small rounded>
    <v-row align="center" justify="center" class="my-1 py-0">
      <v-col :cols="ismobile ? 12 : 4" class="my-1 py-0">
        <v-row>
          <v-col
            :align="ismobile ? 'center' : 'start'"
            justify="center"
            class="ma-1 my-0 py-0"
          >
            <v-row
              v-if="!ismobile"
              :align="ismobile ? 'center' : 'start'"
              :justify="ismobile ? 'center' : 'start'"
            >
              <div class="text ml-4 my-0 py-0 font-weight-bold non-touch">
                Follow Me on:
              </div>
            </v-row>
            <v-row
              :align="ismobile ? 'center' : 'start'"
              :justify="ismobile ? 'center' : 'start'"
            >
              <v-tooltip
                top
                transition="slide-y-transition"
                v-for="(social, index) in socials"
                v-bind:key="index"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="windowLink(social.link)"
                    color="primary"
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ social.title }}</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="ismobile ? 12 : 4" align="center" class="my-0 py-0">
        <div class="text">
          <div class="grey--text text-overline my-0 py-0">
            Portfolio Website
          </div>
          <div class="text-caption my-0 py-0">Powered by</div>
          <div class="grey--text text-overline my-0 py-0">
            Vuetify, Vuejs and More
            <v-icon color="primary">mdi-heart</v-icon>
          </div>
        </div>
      </v-col>
      <v-col :cols="ismobile ? 12 : 4" class="my-0 py-0">
        <v-row class="my-0 mt-1 py-0">
          <v-col
            class="my-0 py-0 text-caption"
            :align="ismobile ? 'center' : 'right'"
          >
            Designed and Developed by
          </v-col>
        </v-row>
        <v-row>
          <v-col
            :align="ismobile ? 'center' : 'end'"
            justify="center"
            class="my-0 mb-1 py-0"
          >
            <div
              :class="
                'font-weight-black text-capitalize' +
                (ismobile ? ' text-center' : '')
              "
            >
              <span @click="windowLink(github.link)" class="point-cursor">
                {{ animatedArray.name.trim() + '.TK' }}
              </span>
              |
              <v-icon color="primary">mdi-copyright</v-icon>
              {{ new Date().getFullYear() }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-col cols="12" :class="'my-0 py-0 ' + (ismobile ? 'px-3' : 'px-16')">
      <v-divider
        :class="'opaque my-0 py-0 ' + (ismobile ? 'mx-3' : 'mx-16')"
      ></v-divider>
    </v-col>
    <v-row align="center">
      <v-col cols="12" align="center" justify="center" class="my-0 py-0">
        <v-row align="center" class="my-0 py-0">
          <v-col
            v-for="(stat, index) in siteStats"
            v-bind:key="index"
            class="my-1 py-0"
            :cols="ismobile ? 12 : 2"
          >
            <v-tooltip top transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="windowLink(stat.link)"
                  plain
                  v-on="on"
                  v-bind="attrs"
                  :block="ismobile"
                  text
                  class="font-weight-bold"
                  small
                  color="primary"
                >
                  {{ stat.name }}
                </v-btn>
              </template>
              <span>{{ stat.tooltip }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { lettersArray } from '@t/emoji-array';
export default {
  data: function () {
    return {
      now: new Date().toLocaleTimeString(),
      clockDiag: false,
      animatedArray: {
        name: '',
      },
      github: {
        link: 'https://github.com/tks18',
      },
      socials: [
        {
          icon: 'mdi-twitter',
          title: 'Twitter',
          link: 'https://twitter.com/shantk18',
        },
        {
          icon: 'mdi-instagram',
          title: 'Instagram',
          link: 'https://instagram.com/shantk18',
        },
        {
          icon: 'mdi-github',
          title: 'Github',
          link: 'https://github.com/tks18',
        },
        {
          icon: 'mdi-gitlab',
          title: 'Gitlab',
          link: 'https://gitlab.com/tks18',
        },
        {
          icon: 'mdi-bitbucket',
          title: 'Bit Bucket',
          link: 'https://bitbucket.org/Shan-tk/',
        },
        {
          icon: 'mdi-quality-medium',
          title: 'Medium',
          link: 'https://medium.com/@tksudharshan',
        },
        {
          icon: 'mdi-email-edit',
          title: 'Email Me',
          link: 'mailto:tksudharshan@infozy.tk',
        },
        {
          icon: 'mdi-google-photos',
          title: 'Photography',
          link: 'https://unsplash.com/@shantk18',
        },
      ],
      siteStats: [
        {
          name: 'Website Bundle Stats',
          link: '/stats/bundle-analyzer.json',
          tooltip: 'Website Bundle Statistics in JSON Data',
        },
        {
          name: 'Website Bundle Analysis',
          link: '/stats/bundle-analyzer.html',
          tooltip: 'Visualization of Website Bundle Statistics',
        },
        {
          name: 'Website UI Stats',
          link: '/stats/ui-stats.json',
          tooltip: 'Website UI Statistics in JSON Data',
        },
        {
          name: 'Website UI Analysis',
          link: '/stats/ui-stats.html',
          tooltip: 'Visualization of Website Bundle Statistics',
        },
        {
          name: 'Website Size Analysis',
          link: '/stats/size-analysis.txt',
          tooltip: 'Size Analysis for this Website',
        },
        {
          name: 'Sitemap',
          link: '/sitemap.xml',
          tooltip: 'Sitemap of the Website',
        },
      ],
    };
  },
  methods: {
    windowLink(url) {
      window.open(url);
      return;
    },
    update(word, stringText) {
      var html = '';
      word.forEach((map) => {
        html += lettersArray[Math.round(map) % lettersArray.length];
      });
      this.$set(this.animatedArray, stringText, html);
    },
    transitWord(wordMap, word, stringText) {
      var tl = this.$gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 2,
        onUpdate: () => {
          this.update(word, stringText);
        },
      });
      wordMap.forEach((range, index) => {
        tl.to(
          word,
          {
            [index]: lettersArray.length * 2 + range,
            ease: 'power4',
            duration: index / 4 + 1,
          },
          0,
        );
      });
    },
  },
  computed: {
    ismobile() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 966) {
        return false;
      } else {
        return true;
      }
    },
    nameMap() {
      return {
        initial: [
          lettersArray.indexOf('s'),
          lettersArray.indexOf('h'),
          lettersArray.indexOf('a'),
          lettersArray.indexOf('n'),
          lettersArray.indexOf(' '),
          lettersArray.indexOf(' '),
          lettersArray.indexOf(' '),
          lettersArray.indexOf(' '),
          lettersArray.indexOf(' '),
          lettersArray.indexOf(' '),
        ],
        map: [
          lettersArray.indexOf('s'),
          lettersArray.indexOf('u'),
          lettersArray.indexOf('d'),
          lettersArray.indexOf('h'),
          lettersArray.indexOf('a'),
          lettersArray.indexOf('r'),
          lettersArray.indexOf('s'),
          lettersArray.indexOf('h'),
          lettersArray.indexOf('a'),
          lettersArray.indexOf('n'),
        ],
      };
    },
  },
  mounted() {
    this.transitWord(this.nameMap.map, this.nameMap.initial, 'name');
  },
};
</script>
