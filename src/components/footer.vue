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
          <v-tooltip top transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <div
                v-on="on"
                v-bind="attrs"
                @click="$router.push('/about-this-project')"
                class="grey--text text-overline my-0 py-0"
              >
                Vuetify, Vuejs and More
                <v-icon color="primary">mdi-heart</v-icon>
              </div>
            </template>
            <span>
              Know More About this Project, its Code and its Working
            </span>
          </v-tooltip>
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
      <v-col cols="12" align="center" class="ma-0 pa-0">
        <v-row align="center" class="ma-0 pa-0">
          <v-col cols="12" class="ma-0 pa-0">
            <v-chip class="ma-2" outlined :color="success ? 'green' : 'yellow'">
              <v-avatar
                :color="success ? 'green' : 'yellow'"
                size="14"
                class="mr-2"
              ></v-avatar>
              Backend
            </v-chip>
            <v-chip class="ma-2" outlined :color="success ? 'green' : 'yellow'">
              <v-avatar
                :color="success ? 'green' : 'yellow'"
                size="14"
                class="mr-2"
              ></v-avatar>
              Database
            </v-chip>
            <v-chip class="ma-2" outlined :color="success ? 'green' : 'yellow'">
              <v-icon
                left
                class="mr-2 ml-1"
                :color="success ? 'green' : 'yellow'"
              >
                mdi-lan-pending
              </v-icon>
              Latency - {{ pingstats }} ms
            </v-chip>
          </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col
            cols="12"
            align="center"
            :class="
              'ma-0 pa-0 text-overline' +
              (success ? ' green--text' : ' yellow--text')
            "
          >
            {{
              success ? 'All Systems Operational' : 'Connecting to Server...'
            }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { ping } from '@p/backend';
import { lettersArray } from '@t/emoji-array';
import { tweenToRev } from '@p/gsap';
export default {
  data: function () {
    return {
      now: new Date().toLocaleTimeString(),
      clockDiag: false,
      success: false,
      pingstats: 0,
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
    };
  },
  methods: {
    windowLink(url) {
      window.open(url);
      return;
    },
    async getBackendStatus() {
      let backendStatus = await ping();
      if (backendStatus.success) {
        this.success = true;
        this.pingstats = backendStatus.timing;
      } else {
        this.$notify({
          group: 'main',
          type: 'error',
          duration: -100,
          title: 'Backend Error',
          text:
            'Error While Connecting to Backend Server. Click the button to check my backup Servers',
          data: {
            loading: false,
            dark: true,
            type: 'Error Notification',
          },
        });
        this.success = false;
        this.pingstats = 0;
      }
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
    tweenToRev({
      vm: this,
      emoji: false,
      arrayName: 'animatedArray',
      finalArray: this.nameMap.map,
      startArray: this.nameMap.initial,
      arrayProperty: 'name',
    });
    this.getBackendStatus();
  },
};
</script>
