<template>
  <v-row align="center" class="my-0 py-0">
    <v-col id="about-aboutmecard" :cols="ismobile ? 12 : 4" class="my-0 py-0">
      <v-card outlined elevation="6">
        <v-card-title class="text-h5 text-center"> Bio </v-card-title>
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
                Professional Skills:
              </span>
              <v-chip-group column>
                <v-chip
                  v-for="(skills, index) in authorData.profSkills"
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
              <span class="text-body-1 font-weight-bold"> Tech Skills: </span>
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
        <photo-carousel
          :bgs="bgs"
          transition="flipY"
          :duration="3"
          :ismobile="ismobile"
        />
        <v-col :cols="ismobile ? 12 : 8">
          <v-card outlined elevation="6" @click="gotoUrl(workProfile.link)">
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
        <v-col
          v-for="(resume, index) in resumes"
          :key="index"
          align="center"
          cols="6"
        >
          <v-card outlined elevation="6" @click="gotoUrl(resume.link)">
            <v-row
              class="inherit-height center-align-div"
              align="center"
              justify="space-around"
            >
              <v-col align="center">
                <v-icon>{{ resume.icon }}</v-icon>
                <div class="text-overline font-weight-bold">
                  {{ resume.text }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
                    :height="ismobile ? 80 : 50"
                    auto-draw
                    type="trend"
                    :smooth="10"
                  />
                </v-card-text>
              </v-card>
            </template>
            <span>Click here for More Stats</span>
          </v-tooltip>
        </v-col>
        <photo-carousel
          :bgs="bgs"
          transition="flipY"
          :duration="4"
          :ismobile="ismobile"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { codingData } from '@p/resources/wakatime';
import photo_carousel from './photo-carousel.vue';

export default {
  name: 'AboutProfileCardComponent',
  components: {
    'photo-carousel': photo_carousel,
  },
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
    dailyData: [],
    dailyLabels: [],
    dailyGradients: ['#f72047', '#ffd200', '#1feaea'],
    consolMinutes: 0,
    resumes: [
      {
        link: 'https://resume.sudharshan.dev',
        icon: 'mdi-file-document-multiple',
        text: 'View E-Resume',
      },
      {
        link: '/assets/downloads/resume/sudharshantk_cv.pdf',
        icon: 'mdi-file-pdf-box',
        text: 'Download PDF Resume',
      },
    ],
  }),
  mounted() {
    this.getLabels();
    this.getCodingData();
  },
  methods: {
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
