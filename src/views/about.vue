<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <v-card :style="{background: 'center', backgroundImage: bgBack, backgroundSize: 'cover', minWidth: '100%'}" elevation="13">
        <div class="hero is-medium non-touch">
          <div class="hero-body">
            <v-row>
              <v-col :cols="ismobile ? 12 : 5" align="left" justify="center">
                <div class="back-blur white--text pa-2 fit-text">
                  <div :class="(ismobile ? 'text-h4 text-center' : 'text-h2') + ' font-weight-black'">
                    Come face to face Huh?
                  </div>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col :cols="ismobile ? 12 : 5" :align="ismobile ? 'center' : 'right'" justify="center">
                <div class="back-blur white--text pa-2 fit-text">
                  <div :class="(ismobile ? 'text-center' : '') + 'text-overline font-weight-bold'">
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
            <v-row align="end" class="px-2">
              <v-col :cols="ismobile ? 12 : 9" :align="ismobile ? 'center' : 'right'" justify="end">
                <div class="container non-touch">
                  <div class="text-overline white--text font-weight-bold">
                    It Looks Like You want to Know About Me !
                  </div>
                  <v-btn text outlined dark @click="" class="text-overline font-weight-bold">
                    <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon> Swipe Down / Click Here <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col :cols="ismobile ? 12 : 3" align="right" justify="end">
                <div class="back-blur fit-text px-2 text-overline font-weight-bold">
                  <span class="white--text"> We are </span><span :class="($vuetify.theme.dark ? 'grad-back-dark' : 'grad-back-light')+' pa-2'"> {{animatedArray.hashTag}} </span> <span class="white--text"> {{' Squad'}} </span>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
      <v-col class="px-0 mx-1 py-0 my-1">
        <v-tooltip bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="primary" v-on="on" v-bind="attrs" @click="playPauseBg"><v-icon>{{ bgPlay ? 'mdi-pause' : 'mdi-play' }}</v-icon></v-btn>
          </template>
          <span>Click here to Play / Pause the BG</span>
        </v-tooltip>
      </v-col>
    </div>
    <div class="column is-full">
      <v-container>
        <v-row>
          <v-col cols="12" align="left" justify="start">
            <div
              @click="$router.push('/blog')"
              :class="
                'clip-text-back text-h5 non-touch ml-6 text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              Pastime and Expertise <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { lettersArray, safeEmojis } from '../templates/emoji-array';
export default {
  data: function () {
    return {
      bgBackImgs: [
        'https://i.ibb.co/hKxmVtF/ezgif-3-71f4d039aaab.gif',
        'https://i.ibb.co/kqzY6r6/giphy.gif',
        'https://i.ibb.co/7Gryd0M/giphy.gif',
        'https://i.ibb.co/Bcksm5z/giphy.gif',
        'https://i.ibb.co/qrXxfLz/giphy.gif',
        'https://i.ibb.co/YTsx3FQ/giphy.gif',
        'https://i.ibb.co/HKhJr5t/giphy.gif'
      ],
      bgkey: 0,
      bgPlay: true,
      bgBack: "",
      keyFrames: [5000,1510,1120,800,1000,3130,2800],
      animatedArray: {
        hashTag: '',
      },
    };
  },
  methods: {
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
    update(word, stringText) {
      var html = '';
      word.forEach((map) => {
        html += lettersArray[Math.round(map) % lettersArray.length];
      });
      this.$set(this.animatedArray, stringText, html);
    },
    playBg() {
      if(this.bgPlay){
        this.bgBack = "url('"+this.bgBackImgs[this.bgkey]+"')"
        var interVal = setInterval(() => {
          if(this.bgPlay){
            this.bgkey++;
            if(this.bgkey > this.bgBackImgs.length - 1){
              this.bgkey = 0;
              this.bgBack = "url('"+this.bgBackImgs[0]+"')"
            } else {
              this.bgBack = "url('"+this.bgBackImgs[this.bgkey]+"')"
            }
          } else {
            clearInterval(interVal);
          }
        }, this.keyFrames[this.bgkey + 1])
      } else {
        this.bgBack = "url('https://i.ibb.co/YR117RN/ezgif-6-6fa4128fb00b.gif')"
      }
    },
    playPauseBg() {
      this.bgPlay = !this.bgPlay;
      this.playBg();
    }
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
    wordMaps() {
      return {
        hash: {
          initial: [
            lettersArray.indexOf('#'),
            lettersArray.indexOf('k'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('a'),
            lettersArray.indexOf('n'),
            lettersArray.indexOf('u'),
            lettersArray.indexOf('r'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('v'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('s'),
          ],
          map: [
            lettersArray.indexOf(' '),
            lettersArray.indexOf('#'),
            lettersArray.indexOf('j'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('h'),
            lettersArray.indexOf('n'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('w'),
            lettersArray.indexOf('i'),
            lettersArray.indexOf('c'),
            lettersArray.indexOf('k'),
            lettersArray.indexOf(' '),
          ]
        }
      }
    }
  },
  beforeMount() {
    this.playBg();
  },
  mounted() {
    this.transitWord(this.wordMaps.hash.map, this.wordMaps.hash.initial, 'hashTag');
  }
};
</script>

<style></style>
