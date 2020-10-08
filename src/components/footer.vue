<template>
  <v-footer elevation="15" inset dense small rounded shaped>
    <v-row align="center" justify="center" class="my-1 py-0">
      <v-col :cols="ismobile ? 12 : 6" class="my-1 py-0">
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
      <v-col :cols="ismobile ? 12 : 6" class="my-0 py-0">
        <v-row>
          <v-col
            :align="ismobile ? 'center' : 'end'"
            justify="center"
            class="my-1 py-0"
          >
            <div
              :class="
                'font-weight-black text-capitalize' +
                (ismobile ? ' text-center' : '')
              "
            >
              {{ animatedArray.name.trim() + '.TK' }} |
              <v-icon color="primary">mdi-copyright</v-icon>
              {{ new Date().getFullYear() }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { lettersArray } from '../templates/emoji-array';
export default {
  data: function () {
    return {
      now: new Date().toLocaleTimeString(),
      clockDiag: false,
      animatedArray: {
        name: '',
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
