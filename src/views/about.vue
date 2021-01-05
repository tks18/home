<template>
  <div class="columns is-multiline non-touch">
    <div class="column is-full">
      <v-card :style="{background: 'center', backgroundImage: bgBack, backgroundSize: 'cover', minWidth: '100%'}" elevation="13">
        <div class="hero is-fullheight non-touch">
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
            <v-row align="end" class="py-1 px-1">
              <v-col :cols="ismobile ? 12 : 9"  justify="end" class="py-0">
                <v-row align="end" class="py-0">
                  <v-col cols="2" align="left" justify="end" class="py-1">
                    <v-tooltip bottom transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn fab small color="primary" v-on="on" v-bind="attrs" @click="playPauseBg"><v-icon>mdi-play</v-icon></v-btn>
                      </template>
                      <span>Click here to Play / Pause the BG</span>
                    </v-tooltip>
                  </v-col>
                  <v-col cols="10" :align="ismobile ? 'center' : 'right'" justify="end" class="py-0">
                    <div class="container non-touch py-0">
                      <div class="text-overline white--text font-weight-bold">
                        It Looks Like You want to Know About Me !
                      </div>
                      <v-btn text outlined dark @click="$vuetify.goTo('#scrolltarget')" class="text-overline font-weight-bold">
                        <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon> Swipe Down / Click Here <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="ismobile ? 12 : 3" align="right" justify="end" class="py-0">
                <div class="back-blur fit-text px-2 text-overline font-weight-bold">
                  <span class="white--text"> We are </span><span :class="($vuetify.theme.dark ? 'grad-back-dark' : 'grad-back-light')+' pa-2'"> {{animatedArray.hashTag}} </span> <span class="white--text"> {{' Squad'}} </span>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
    </div>
    <div class="column is-full py-2">
      <v-container>
        <v-row>
          <v-col cols="12" align="left" justify="start">
            <div
              id="scrolltarget"
              :class="
                'clip-text-back text-h5 font-weight-bold non-touch ml-6 text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              Profile Card <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col cols="12">
            <v-row align="center">
              <v-col :cols="ismobile ? 12 : 4">
                <v-card height="450" outlined elevation="6">
                  <v-card-title class="text-h5 text-center">
                    About Me
                  </v-card-title>
                  <v-card-subtitle>
                    (If You are Bad, I am Your Dad <span class="font-weight-bold">Hehe Lol xD 😉</span>)
                  </v-card-subtitle>
                  <v-divider class="opaque mx-2 my-0"></v-divider>
                  <v-card-text>
                    <v-row class="my-0">
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Name:  </span><span class="text-body-2">{{ authorData.name }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Nickname:  </span><span class="text-body-2">{{ authorData.nickName }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Status:  </span><span class="text-body-2">{{ authorData.status }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Age:  </span><span class="text-body-2">{{ authorData.age }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Nationality:  </span><span class="text-body-2">{{ authorData.nationality }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Professional Education:  </span><span class="text-body-2">{{ authorData.profComp }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Technicalities:  </span><v-chip-group column><v-chip small color="primary" v-for="(skills, index) in authorData.techSkills" class="my-1 mx-1" v-bind:key="index">{{skills}}</v-chip></v-chip-group>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Areas of Interest:  </span><v-chip-group columnz><v-chip small color="primary" v-for="(interests, index) in authorData.aOfInt" class="my-1 mx-1" v-bind:key="index">{{interests}}</v-chip></v-chip-group>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col :cols="ismobile ? 12 : 8">
                <v-row>
                  <v-scroll-y-transition mode="out-in">
                    <v-col v-bind:key="cardbgs.leftKey" :cols="ismobile ? 12 : 4">
                      <v-card height="150" outlined elevation="6">
                        <v-img cover height="150" :src="cardbgs.lefttop" ></v-img>
                      </v-card>
                    </v-col>
                  </v-scroll-y-transition>
                  <v-col :cols="ismobile ? 12 : 8">
                    <v-card height="150" outlined elevation="6" color="purple darken-1" @click="">
                      <v-row justify="space-between" class="mx-0">
                        <v-col cols="6" class="mx-0 my-0 px-0 py-0">
                          <v-card-title>Work Profile</v-card-title>
                          <v-card-text class="font-weight-light">
                            Working in <span class="font-weight-bold">Ford Rhodes Parks</span><br>
                            as <span class="font-weight-bold">Audit Assistant</span>
                          </v-card-text>
                        </v-col>
                        <v-divider vertical class="opaque"></v-divider>
                        <v-col align="right" justify="end" cols="5" class="mx-0 my-0 py-0 px-0">
                          <v-img contain height="150" src="https://i.ibb.co/Ltf1SNX/fabian-irsara-67l-Quj-B14w-unsplash.jpg"></v-img>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card height="100" outlined elevation="6">
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col :cols="ismobile ? 12: 8">
                    <v-card height="150" outlined elevation="6">
                    </v-card>
                  </v-col>
                  <v-scroll-y-transition mode="out-in">
                    <v-col v-bind:key="cardbgs.rightKey" :cols="ismobile ? 12 : 4">
                      <v-card height="150" outlined elevation="6">
                        <v-img cover height="150" :src="cardbgs.rightbottom"></v-img>
                      </v-card>
                    </v-col>
                  </v-scroll-y-transition>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="8">
                <v-card height="450" outlined elevation="6" color="error" @click="">
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-row>
                  <v-col cols="12">
                    <v-card height="200" outlined elevation="6">
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card height="200" outlined elevation="6" >
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { lettersArray, safeEmojis } from '../templates/emoji-array';
import { countUpFromTime } from '../plugins/helpers';
export default {
  data: function () {
    return {
      bg: {
        static: "url('https://i.ibb.co/YR117RN/ezgif-6-6fa4128fb00b.gif')",
        anim: "url('https://i.ibb.co/hKxmVtF/ezgif-3-71f4d039aaab.gif')"
      },
      bgs: [
        'https://i.ibb.co/sv0Y5mn/IMG-20200130-134312.jpg',
        'https://i.ibb.co/TgcjrY1/20191229-170937.jpg',
        'https://i.ibb.co/9gbWynG/IMG-20191218-222419-347.jpg',
        'https://i.ibb.co/zSVyqnP/00100sr-PORTRAIT-00100-BURST20201011083336744-COVER-3.jpg',
        'https://i.ibb.co/DKhHqwY/IMG-20200118-172203-1.jpg',
        'https://i.ibb.co/KGjkwzn/IMG-20191028-170205.jpg'
      ],
      bgPlay: true,
      cardbgs: {
        lefttop: '',
        leftKey: 0,
        rightbottom: '',
        rightKey: 0
      },
      authorData: {
        name: 'Sudharshan TK',
        nickName: 'Shan.tk',
        status: 'Currently Automating Workflows',
        age: countUpFromTime('May 16, 2000 16:21:00').years,
        nationality: 'A Proud Indian',
        profComp: 'Chartered Accountant Student',
        techSkills: [
          'Web Development',
          'Python',
          'Backend Development',
          'MS Office Tools'
        ],
        aOfInt: [
          'AI',
          'ReactJs',
          'VueJs',
          'Gsap',
          'NodeJs'
        ]
      },
      bgBack: "",
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
      this.bgBack = this.bg.anim
      setTimeout(() => {
        this.bgBack = this.bg.static
      }, 3342)
    },
    playPauseBg() {
      this.bgPlay = !this.bgPlay;
      this.playBg()
    },
    setCardBgs() {
      let firstInt = this.$_.random(0, this.bgs.length - 1)
      let secondInt = this.$_.random(0, this.bgs.length - 1)
      while (secondInt == firstInt){
        secondInt = this.$_.random(0, this.bgs.length - 1)
      }
      this.$set(this.cardbgs, 'lefttop', this.bgs[firstInt])
      this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1)
      this.$set(this.cardbgs, 'rightbottom', this.bgs[secondInt])
      this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1)
      setInterval(() => {
        let firstInt = this.$_.random(0, this.bgs.length - 1)
        let secondInt = this.$_.random(0, this.bgs.length - 1)
        while (secondInt == firstInt){
          secondInt = this.$_.random(0, this.bgs.length - 1)
        }
        this.$set(this.cardbgs, 'lefttop', this.bgs[firstInt])
        this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1)
        this.$set(this.cardbgs, 'rightbottom', this.bgs[secondInt])
        this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1)
      }, Math.floor(Math.random() + 5) * 1000)
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
    this.setCardBgs();
  }
};
</script>

<style></style>
