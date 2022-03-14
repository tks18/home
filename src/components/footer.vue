<template>
  <v-footer
    class="pa-2 mt-3 non-touch"
    elevation="22"
    inset
    dense
    outlined
    small
    rounded
  >
    <v-row align="center" justify="center" class="my-1 py-0">
      <v-col :cols="ismobile ? 12 : 4" class="my-1 py-1">
        <v-row>
          <v-col
            :align="ismobile ? 'center' : 'start'"
            justify="center"
            class="ma-1 my-1 py-2"
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
                v-for="(social, index) in socials"
                :key="index"
                top
                transition="slide-y-transition"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    color="primary"
                    v-on="on"
                    @click="windowLink(social.link)"
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
      <v-col :cols="ismobile ? 12 : 4" align="center" class="my-1 py-0">
        <div class="text">
          <div class="text-caption my-0 py-0">Powered by</div>
          <v-tooltip top transition="slide-y-transition">
            <template #activator="{ on, attrs }">
              <div
                v-bind="attrs"
                :class="
                  'grey--text point-cursor text-overline my-0 py-0' +
                  ($vuetify.theme.dark
                    ? ' underhover-light'
                    : ' underhover-dark')
                "
                v-on="on"
                @click="$router.push('/about-this-project')"
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
      <v-col :cols="ismobile ? 12 : 4" class="my-1 py-0">
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
              <span class="point-cursor" @click="windowLink(github.link)">
                {{ name }}
              </span>
              |
              <v-icon color="primary">mdi-copyright</v-icon>
              {{ new Date().getFullYear() }}
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" align="center" class="ma-0 my-1 pa-0">
        <v-row align="center" class="ma-0 pa-0">
          <v-col cols="12" class="ma-0 pa-0">
            <v-chip class="ma-1" small :color="success ? 'primary' : 'error'">
              <v-icon left small class="mr-2 ml-1">
                {{ success ? 'mdi-web' : 'mdi-web-clock' }}
              </v-icon>
              Backend
            </v-chip>
            <v-chip class="ma-1" small :color="success ? 'primary' : 'error'">
              <v-icon left small class="mr-2 ml-1">
                {{ success ? 'mdi-database-check' : 'mdi-database-alert' }}
              </v-icon>
              Database
            </v-chip>
            <v-chip class="ma-1" small :color="success ? 'primary' : 'error'">
              <v-icon left small class="mr-2 ml-1">
                {{ success ? 'mdi-lan-check' : 'mdi-lan-pending' }}
              </v-icon>
              Latency - {{ pingstats }} ms
            </v-chip>
            <v-chip class="ma-1" small :color="success ? 'primary' : 'error'">
              <v-icon left small class="mr-2 ml-1">
                {{
                  success
                    ? 'mdi-checkbox-multiple-marked-circle'
                    : 'mdi-checkbox-multiple-blank-circle'
                }}
              </v-icon>
              {{
                success ? 'All Systems Operational' : 'Connecting to Server...'
              }}
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import { ping } from '@p/backend';
import authorData from '@t/authorData';
import { ismobile } from '@p/helpers';

export default {
  data: () => ({
    now: new Date().toLocaleTimeString(),
    clockDiag: false,
    name: authorData.name,
    success: false,
    pingstats: 0,
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
        icon: 'mdi-camera',
        title: 'Photography',
        link: 'https://unsplash.com/@shantk18',
      },
    ],
  }),
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.getBackendStatus();
  },
  methods: {
    windowLink(url) {
      window.open(url);
    },
    async getBackendStatus() {
      const backendStatus = await ping(this.$state.store);
      if (backendStatus.success) {
        this.success = true;
        this.pingstats = backendStatus.timing;
      } else {
        this.$notify({
          group: 'main',
          type: 'error',
          duration: -100,
          title: 'Backend Error',
          text: 'Error While Connecting to Backend Server. Click the button to check my backup Servers',
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
};
</script>
