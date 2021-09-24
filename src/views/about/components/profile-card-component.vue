<template>
  <v-col cols="12" class="my-0 py-0">
    <v-row align="center" class="my-0 py-0">
      <v-col id="about-aboutmecard" :cols="ismobile ? 12 : 4" class="my-0 py-0">
        <v-card outlined elevation="6">
          <v-card-title class="text-h5 text-center"> About Me </v-card-title>
          <v-card-subtitle>
            (If You are Bad, I am Your Dad
            <span class="font-weight-bold">Hehe Lol xD 😉</span>)
          </v-card-subtitle>
          <v-divider class="opaque mx-2 my-0" />
          <v-card-text>
            <v-row class="my-0">
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold">Name: </span>
                <span class="text-body-2">{{ authorData.name }}</span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold"> Nickname: </span>
                <span class="text-body-2">
                  {{ authorData.nickName }}
                </span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold"> Status: </span>
                <span class="text-body-2">
                  {{ authorData.status }}
                </span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold"> Age: </span>
                <span class="text-body-2">{{ authorData.age }}</span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold"> Nationality: </span>
                <span class="text-body-2">
                  {{ authorData.nationality }}
                </span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold">
                  Professional Education:
                </span>
                <span class="text-body-2">
                  {{ authorData.profComp }}
                </span>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold">
                  Technicalities:
                </span>
                <v-chip-group column>
                  <v-chip
                    v-for="(skills, index) in authorData.techSkills"
                    :key="index"
                    small
                    color="primary"
                    class="my-1 mx-1"
                    @click="gotoUrl(skills.link)"
                  >
                    {{ skills.name }}
                  </v-chip>
                </v-chip-group>
              </v-col>
              <v-col class="my-0 py-0" cols="12" align="left">
                <span class="text-body-1 font-weight-bold">
                  Areas of Interest:
                </span>
                <v-chip-group column>
                  <v-chip
                    v-for="(interests, index) in authorData.aOfInt"
                    :key="index"
                    small
                    color="primary"
                    class="my-1 mx-1"
                    @click="gotoUrl(interests.link)"
                  >
                    {{ interests.name }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="ismobile ? 12 : 8">
        <v-row>
          <v-tooltip top transition="slide-y-transition">
            <template #activator="{ on, attrs }">
              <v-scroll-y-transition mode="out-in">
                <v-col v-if="!cardbgs.play" :cols="ismobile ? 12 : 4">
                  <v-skeleton-loader type="card-avatar" height="150" />
                </v-col>
                <v-col
                  v-if="cardbgs.play"
                  v-bind="attrs"
                  :key="cardbgs.leftKey"
                  :cols="ismobile ? 12 : 4"
                  v-on="on"
                >
                  <v-card
                    :img="cardbgs.lefttop"
                    :height="ismobile ? 250 : 150"
                    outlined
                    elevation="6"
                  />
                </v-col>
              </v-scroll-y-transition>
            </template>
            <span>Click here to View My Gallery</span>
          </v-tooltip>
          <v-col :cols="ismobile ? 12 : 8">
            <v-card
              outlined
              elevation="6"
              @click="gotoUrl('http://fordrhodesparks.com')"
            >
              <v-card-title class="back-blur-no-inherit">
                Work Profile
              </v-card-title>
              <v-card-subtitle class="back-blur-no-inherit">
                About my Position
              </v-card-subtitle>
              <v-card-text class="back-blur-no-inherit text-overline">
                Working in
                <span class="font-weight-black primary--text">
                  {{ workProfile.place }}
                </span>
                as
                <span class="font-weight-black primary--text">
                  {{ workProfile.position }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center" cols="12">
            <v-card
              :height="ismobile ? null : null"
              :class="
                $vuetify.theme.dark ? 'grad-back-dark' : 'grad-back-light'
              "
              outlined
              elevation="6"
              @click="resumeDialog = true"
            >
              <v-row
                class="inherit-height center-align-div"
                align="center"
                justify="space-around"
              >
                <v-col align="center">
                  <v-icon>mdi-download</v-icon>
                  <div class="text-overline font-weight-bold">
                    Download my Resume in PDF Format
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="resumeDialog" width="400">
          <v-card class="non-touch">
            <v-card-title>Download Resume</v-card-title>
            <v-card-text>
              <v-row class="inherit-height" align="center">
                <v-col cols="6">
                  <v-card
                    flat
                    @click="
                      gotoUrl('/assets/downloads/resume/Sudharshan-tk-full.pdf')
                    "
                  >
                    <v-card-text>
                      <v-icon> mdi-download </v-icon>
                      Full Version
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card
                    flat
                    @click="
                      gotoUrl(
                        '/assets/downloads/resume/Sudharshan-tk-short.pdf',
                      )
                    "
                  >
                    <v-card-text>
                      <v-icon> mdi-download </v-icon>
                      Mini Version
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn outlined color="primary" @click="resumeDialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col :cols="ismobile ? 12 : 8">
            <v-tooltip top transition="slide-y-transition">
              <template #activator="{ on, attrs }">
                <v-card
                  v-bind="attrs"
                  outlined
                  elevation="6"
                  v-on="on"
                  @click="$vuetify.goTo('#about-moreStats')"
                >
                  <div
                    class="font-weight-bold text-center my-1 pa-0 text-caption"
                  >
                    Past Week Coding Stats | This Week -
                    {{ consolMinutes }} Minutes
                  </div>
                  <v-card-text>
                    <v-sparkline
                      :value="dailyData"
                      :labels="dailyLabels"
                      :gradient="dailyGradients"
                      gradient-direction="top"
                      :label-size="ismobile ? 9 : 7"
                      stroke-linecap="round"
                      :class="ismobile ? 'mx-1' : 'mx-2'"
                      line-width="2"
                      :height="ismobile ? 82 : 60"
                      auto-draw
                      type="trend"
                      :smooth="7"
                    />
                  </v-card-text>
                </v-card>
              </template>
              <span>Click here for More Stats</span>
            </v-tooltip>
          </v-col>
          <v-tooltip top transition="slide-y-transition">
            <template #activator="{ on, attrs }">
              <v-scroll-y-transition mode="out-in">
                <v-col v-if="!cardbgs.play" :cols="ismobile ? 12 : 4">
                  <v-skeleton-loader type="card-avatar" height="150" />
                </v-col>
                <v-col
                  v-if="cardbgs.play"
                  :key="cardbgs.rightKey"
                  v-bind="attrs"
                  :cols="ismobile ? 12 : 4"
                  v-on="on"
                >
                  <v-card
                    :img="cardbgs.rightbottom"
                    :height="ismobile ? 250 : 150"
                    outlined
                    elevation="6"
                  />
                </v-col>
              </v-scroll-y-transition>
            </template>
            <span>Click here to View My Gallery</span>
          </v-tooltip>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { codingData } from '@p/resources/wakatime';

export default {
  name: 'AboutProfileCardComponent',
  props: {
    authorData: {
      type: Object,
      default: () => {},
    },
    bgs: {
      type: Array,
      default: () => [],
    },
    workProfile: {
      type: Object,
      default: () => {},
    },
    gotoUrl: {
      type: Function,
      default: () => {},
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    bgPlay: true,
    dailyData: [],
    dailyLabels: [],
    dailyGradients: ['#f72047', '#ffd200', '#1feaea'],
    consolMinutes: 0,
    resumeDialog: false,
    cardbgs: {
      play: false,
      lefttop: '',
      leftKey: 0,
      rightbottom: '',
      rightKey: 0,
    },
  }),
  mounted() {
    this.setCardBgs();
    this.getLabels();
    this.getCodingData();
  },
  methods: {
    setCardBgs() {
      this.$set(this.cardbgs, 'play', false);
      const firstInt = this.$lodash.random(0, this.bgs.length - 1);
      let secondInt = this.$lodash.random(0, this.bgs.length - 1);
      while (secondInt === firstInt) {
        secondInt = this.$lodash.random(0, this.bgs.length - 1);
      }
      this.$set(this.cardbgs, 'lefttop', this.bgs[firstInt]);
      this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1);
      this.$set(this.cardbgs, 'rightbottom', this.bgs[secondInt]);
      this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1);
      setInterval(() => {
        const firstIntLoop = this.$lodash.random(0, this.bgs.length - 1);
        let secondIntLoop = this.$lodash.random(0, this.bgs.length - 1);
        while (secondIntLoop === firstIntLoop) {
          secondIntLoop = this.$lodash.random(0, this.bgs.length - 1);
        }
        this.$set(this.cardbgs, 'lefttop', this.bgs[firstIntLoop]);
        this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1);
        this.$set(this.cardbgs, 'rightbottom', this.bgs[secondIntLoop]);
        this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1);
        this.$set(this.cardbgs, 'play', true);
      }, Math.floor(Math.random() + 5) * 1000);
    },
    getLabels() {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const today = new Date();
      const dayInText = today.getDay();
      const currLabels = [];
      const loopend = dayInText - 7;
      for (let i = dayInText; i > loopend; i--) {
        if (i < 0) {
          const correctId = 7 + i;
          currLabels.push(days[correctId]);
        } else {
          currLabels.push(days[i]);
        }
      }
      this.dailyLabels = this.$lodash.reverse(currLabels);
    },
    async getCodingData() {
      const codeData = await codingData();
      if (codeData.success && codeData.data != null) {
        this.dailyData = codeData.data.dailyData;
        this.consolMinutes = codeData.data.consolMinutes;
      } else {
        this.dailyData = [];
        this.consolMinutes = [];
      }
    },
  },
};
</script>

<style></style>
