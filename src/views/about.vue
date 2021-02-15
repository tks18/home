<template>
  <div class="columns is-multiline non-touch">
    <div
      id="aboutMeTitle"
      :class="
        'column is-full text-center text-capitalize text font-weight-bold mt-3 mb-0 pb-0 ' +
        (ismobile ? 'text-h5' : 'text-h4')
      "
    >
      {{ animatedArray.title }}
    </div>
    <div
      class="column is-full text-center text text-overline font-weight-bold mt-0 pt-0 pb-1"
    >
      <v-btn
        class="ma-0 pa-0"
        @click="$vuetify.goTo('#aboutmecard')"
        text
        plain
        color="primary"
      >
        (Skip to Main Content)
      </v-btn>
    </div>
    <div class="column is-full">
      <div
        :style="{
          background: 'center',
          backgroundImage: mainBg,
          backgroundSize: 'cover',
          height: ismobile ? '400px' : '450px',
          minWidth: '100%',
        }"
        class="hero non-touch"
      >
        <div id="initscroll" class="hero-body">
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
            <v-spacer></v-spacer>
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
              <div
                class="back-blur fit-text px-2 text-overline font-weight-bold"
              >
                <span
                  :class="
                    ($vuetify.theme.dark
                      ? 'grad-back-dark'
                      : 'grad-back-light') + ' pa-2'
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
    <div class="column is-full py-1">
      <v-container>
        <v-row>
          <v-col align="start" justify="start">
            <div
              id="someWordsTitle"
              :class="
                'clip-text-back text-h5 non-touch text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              {{ animatedArray.someWords }}
              <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col
            cols="12"
            :class="(ismobile ? 'mx-1' : 'mx-2') + ' text-body-1'"
          >
            {{ authorData.intro }}
          </v-col>
          <v-col cols="12" align="center">
            <v-chip
              v-for="(chip, index) in aboutChips"
              v-bind:key="index"
              color="primary"
              @click="$vuetify.goTo(chip.id)"
              outlined
              class="my-1 mx-1"
            >
              <v-icon left color="primary">
                {{ chip.icon }}
              </v-icon>
              {{ chip.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="column is-full py-1">
      <v-row>
        <v-col cols="12" class="my-0 py-0">
          <v-container class="my-0 py-0">
            <v-row align="center" class="my-0 py-0">
              <v-col
                id="aboutmecard"
                :cols="ismobile ? 12 : 4"
                class="my-0 py-0"
              >
                <v-card outlined elevation="6">
                  <v-card-title class="text-h5 text-center">
                    About Me
                  </v-card-title>
                  <v-card-subtitle>
                    (If You are Bad, I am Your Dad
                    <span class="font-weight-bold">Hehe Lol xD 😉</span>)
                  </v-card-subtitle>
                  <v-divider class="opaque mx-2 my-0"></v-divider>
                  <v-card-text>
                    <v-row class="my-0">
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">Name: </span
                        ><span class="text-body-2">{{ authorData.name }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">
                          Nickname:
                        </span>
                        <span class="text-body-2">
                          {{ authorData.nickName }}
                        </span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">
                          Status:
                        </span>
                        <span class="text-body-2">
                          {{ authorData.status }}
                        </span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold"> Age: </span>
                        <span class="text-body-2">{{ authorData.age }}</span>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold">
                          Nationality:
                        </span>
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
                            small
                            color="primary"
                            v-for="(skills, index) in authorData.techSkills"
                            class="my-1 mx-1"
                            @click="gotoUrl(skills.link)"
                            v-bind:key="index"
                          >
                            {{ skills.name }}
                          </v-chip>
                        </v-chip-group>
                      </v-col>
                      <v-col class="my-0 py-0" cols="12" align="left">
                        <span class="text-body-1 font-weight-bold"
                          >Areas of Interest:
                        </span>
                        <v-chip-group column>
                          <v-chip
                            small
                            color="primary"
                            v-for="(interests, index) in authorData.aOfInt"
                            class="my-1 mx-1"
                            @click="gotoUrl(interests.link)"
                            v-bind:key="index"
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
                    <template v-slot:activator="{ on, attrs }">
                      <v-scroll-y-transition mode="out-in">
                        <v-col v-if="!cardbgs.play" :cols="ismobile ? 12 : 4">
                          <v-skeleton-loader type="card-avatar" height="150">
                          </v-skeleton-loader>
                        </v-col>
                        <v-col
                          v-on="on"
                          v-bind="attrs"
                          v-if="cardbgs.play"
                          v-bind:key="cardbgs.leftKey"
                          :cols="ismobile ? 12 : 4"
                        >
                          <v-card
                            :img="cardbgs.lefttop"
                            :height="ismobile ? 250 : 150"
                            outlined
                            elevation="6"
                          >
                          </v-card>
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
                      <v-card-title class="back-blur-no-inherit"
                        >Work Profile</v-card-title
                      >
                      <v-card-subtitle class="back-blur-no-inherit"
                        >About my Position</v-card-subtitle
                      >
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
                      @click="resumeDialog = true"
                      :height="ismobile ? null : null"
                      :class="
                        $vuetify.theme.dark
                          ? 'grad-back-dark'
                          : 'grad-back-light'
                      "
                      outlined
                      elevation="6"
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
                            @click="
                              gotoUrl(
                                '/assets/downloads/resume/Sudharshan-tk-full.pdf',
                              )
                            "
                            flat
                          >
                            <v-card-text>
                              <v-icon> mdi-download </v-icon>
                              Full Version
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col cols="6">
                          <v-card
                            @click="
                              gotoUrl(
                                '/assets/downloads/resume/Sudharshan-tk-short.pdf',
                              )
                            "
                            flat
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
                      <v-spacer></v-spacer>
                      <v-btn
                        outlined
                        color="primary"
                        @click="resumeDialog = false"
                        >Close</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-row>
                  <v-col :cols="ismobile ? 12 : 8">
                    <v-tooltip top transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-card
                          v-on="on"
                          v-bind="attrs"
                          outlined
                          elevation="6"
                          @click="$vuetify.goTo('#moreStats')"
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
                            >
                            </v-sparkline>
                          </v-card-text>
                        </v-card>
                      </template>
                      <span>Click here for More Stats</span>
                    </v-tooltip>
                  </v-col>
                  <v-tooltip top transition="slide-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-scroll-y-transition mode="out-in">
                        <v-col v-if="!cardbgs.play" :cols="ismobile ? 12 : 4">
                          <v-skeleton-loader type="card-avatar" height="150">
                          </v-skeleton-loader>
                        </v-col>
                        <v-col
                          v-if="cardbgs.play"
                          v-bind:key="cardbgs.rightKey"
                          v-on="on"
                          v-bind="attrs"
                          :cols="ismobile ? 12 : 4"
                        >
                          <v-card
                            :img="cardbgs.rightbottom"
                            :height="ismobile ? 250 : 150"
                            outlined
                            elevation="6"
                          >
                          </v-card>
                        </v-col>
                      </v-scroll-y-transition>
                    </template>
                    <span>Click here to View My Gallery</span>
                  </v-tooltip>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12">
          <v-container>
            <v-row justify="center">
              <v-col
                cols="12"
                align="center"
                justify="center"
                class="mx-2 my-0 py-0 non-touch"
              >
                <v-row id="lifetime">
                  <v-tooltip top transition="slide-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-row v-ripple v-bind="attrs" v-on="on">
                        <v-col
                          :cols="ismobile ? 12 : 6"
                          :align="ismobile ? 'center' : 'end'"
                          :class="
                            (ismobile ? 'text-body-2' : 'text-h6') +
                            ' text my-0 py-0 font-weight-bold'
                          "
                        >
                          Time Travelling for 🤙 xD
                        </v-col>
                        <v-col
                          :cols="ismobile ? 12 : 6"
                          :align="ismobile ? 'center' : 'start'"
                          :class="
                            (ismobile ? 'text-body-2' : 'text-h6') +
                            ' text my-0 py-0 primary--text font-weight-bold'
                          "
                        >
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.years.toFixed(0),
                            ) + 'Y :'
                          }}
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.weeks.toFixed(0),
                            ) + 'W :'
                          }}
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.days.toFixed(0),
                            ) + 'D :'
                          }}
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.hours.toFixed(0),
                            ) + 'H :'
                          }}
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.minutes.toFixed(0),
                            ) + 'M :'
                          }}
                          {{
                            new Intl.NumberFormat().format(
                              lifeTimeCountDown.seconds.toFixed(0),
                            ) + 'S'
                          }}
                        </v-col>
                        <v-col
                          cols="12"
                          class="my-0 py-0 text-overline font-weight-bold"
                          >Wish Me Good Luck in {{ birthdayDays }} Days
                          😁😎</v-col
                        >
                      </v-row>
                    </template>
                    <span> Counting from my Birthday</span>
                  </v-tooltip>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" id="languagesknown">
          <v-card flat elevation="12">
            <v-card-title class="mx-2 no-break-words">
              Top Languages, Frameworks, Softwares that i Know
            </v-card-title>
            <v-card-subtitle class="mx-2 no-break-words">
              (Scores upto 100)
            </v-card-subtitle>
            <v-card-text>
              <v-sparkline
                :value="languagesKnown.values"
                :labels="languagesKnown.labels"
                :gradient="languagesKnown.gradient"
                gradient-direction="top"
                :label-size="ismobile ? 10 : 3"
                :height="ismobile ? 130 : 70"
                :class="ismobile ? 'mx-0' : 'mx-2'"
                line-width="3"
                auto-draw
                type="bar"
              >
              </v-sparkline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col id="moreStats" cols="12">
          <v-container>
            <v-row>
              <v-col :cols="ismobile ? 12 : 8">
                <v-card outlined elevation="6">
                  <v-card-title>SWOT Analysis - Programmers Way </v-card-title>
                  <v-card-subtitle>
                    (Strength-Weakness-Opportunity-Threats)
                  </v-card-subtitle>
                  <v-card-text>
                    <v-row class="my-0 py-0">
                      <v-col cols="12" class="my-0 py-0">
                        <v-row class="my-0">
                          <v-col cols="5" align="right" justify="center">
                            <v-card-subtitle class="text-overline">
                              Strengths
                            </v-card-subtitle>
                            <div
                              v-for="(strength, index) in swot.strengths"
                              v-bind:key="index"
                            >
                              {{ index + 1 + '. ' + strength }}
                            </div>
                          </v-col>
                          <v-col cols="2" align="center" justify="center">
                            <v-divider
                              vertical
                              class="opaque mx-0 my-0 px-0 py-0"
                            ></v-divider>
                          </v-col>
                          <v-col cols="5" align="left" justify="center">
                            <v-card-subtitle class="text-overline">
                              Weakness
                            </v-card-subtitle>
                            <div
                              v-for="(weakness, index) in swot.weakness"
                              v-bind:key="index"
                            >
                              {{ index + 1 + '. ' + weakness }}
                            </div>
                          </v-col>
                        </v-row>
                        <v-divider
                          class="opaque mx-0 my-0 px-0 py-0"
                        ></v-divider>
                        <v-row>
                          <v-col cols="5" align="right" justify="center">
                            <v-card-subtitle class="text-overline">
                              Opportunities
                            </v-card-subtitle>
                            <div
                              v-for="(oppor, index) in swot.opportunities"
                              v-bind:key="index"
                            >
                              {{ index + 1 + '. ' + oppor }}
                            </div>
                          </v-col>
                          <v-col cols="2" align="center" justify="center">
                            <v-divider
                              vertical
                              class="opaque mx-0 my-0 px-0 py-0"
                            ></v-divider>
                          </v-col>
                          <v-col cols="5" align="left" justify="center">
                            <v-card-subtitle class="text-overline">
                              Threats
                            </v-card-subtitle>
                            <div
                              v-for="(threats, index) in swot.threats"
                              v-bind:key="index"
                            >
                              {{ index + 1 + '. ' + threats }}
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col :cols="ismobile ? 12 : 4">
                <v-row>
                  <v-col cols="12">
                    <v-card outlined elevation="6">
                      <v-card-title
                        class="text-caption my-2 py-1 font-weight-bold"
                      >
                        Language Trend (30 Days)
                      </v-card-title>
                      <v-sparkline
                        :value="languageTrendData"
                        :labels="languageTrendLabels"
                        :gradient="languageTrendGradients"
                        gradient-direction="top"
                        :label-size="ismobile ? 9 : 8"
                        stroke-linecap="round"
                        class="mx-1"
                        :height="ismobile ? 90 : 97"
                        line-width="2"
                        auto-draw
                        type="trend"
                        :smooth="7"
                      >
                      </v-sparkline>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card outlined elevation="6">
                      <v-card-title class="font-weight-bold">
                        Top Editors I Use
                      </v-card-title>
                      <v-card-subtitle>(All Time)</v-card-subtitle>
                      <v-card-text>
                        <v-row class="mx-0">
                          <v-col
                            v-for="(editor, index) in editorsTrendData"
                            v-bind:key="index"
                            cols="6"
                            class="my-0 py-1"
                          >
                            <div class="text-caption">
                              {{ index + 1 + '. '
                              }}{{ editorsTrendLabels[index] }} - {{ editor }}%
                            </div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { aboutpageMaps } from '@t/wordmap';
import authorData from '@t/authorData';
import { codingData, languageTrend, editorsData } from '@p/resources/wakatime';
import { countUpFromTime } from '@p/helpers';
import gsap from '@p/gsap';
export default {
  metaInfo: function () {
    return {
      title: 'About',
    };
  },
  data: function () {
    return {
      mainBg: "url('https://i.ibb.co/DVtbmxt/ezgif-6-6fa4128fb00b.webp')",
      bgs: authorData.bgs,
      bgPlay: true,
      cardbgs: {
        play: false,
        lefttop: '',
        leftKey: 0,
        rightbottom: '',
        rightKey: 0,
      },
      lifeTimeCountDown: {
        years: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      dailyData: [],
      dailyLabels: [],
      dailyGradients: ['#f72047', '#ffd200', '#1feaea'],
      consolMinutes: 0,
      languageTrendData: [],
      languageTrendLabels: [],
      languageTrendGradients: [],
      editorsTrendData: [],
      editorsTrendLabels: [],
      swot: authorData.swot,
      resumeDialog: false,
      authorData: {
        ...authorData.main,
        age: countUpFromTime('May 16, 2000 16:21:00').years,
      },
      workProfile: authorData.workProfile,
      animatedArray: {
        hashTag: ' ',
        title: ' ',
        someWords: ' ',
      },
    };
  },
  methods: {
    gotoUrl(url) {
      window.open(url);
      return;
    },
    lifeTimeCounter(elem) {
      gsap.observeNexecute(elem, () => {
        let newVals = countUpFromTime('May 16, 2000 16:21:00');
        let tl = this.$gsap.timeline();
        for (const [key] of Object.entries(this.lifeTimeCountDown)) {
          tl.to(this.$data.lifeTimeCountDown, {
            [key]: newVals[key],
            duration: 0.8,
          });
        }
        setTimeout(() => {
          setInterval(() => {
            this.lifeTimeCountDown = countUpFromTime('May 16, 2000 16:21:00');
          }, 1000);
        }, 3800);
      });
    },
    setCardBgs() {
      this.$set(this.cardbgs, 'play', false);
      let firstInt = this.$_.random(0, this.bgs.length - 1);
      let secondInt = this.$_.random(0, this.bgs.length - 1);
      while (secondInt == firstInt) {
        secondInt = this.$_.random(0, this.bgs.length - 1);
      }
      this.$set(this.cardbgs, 'lefttop', this.bgs[firstInt]);
      this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1);
      this.$set(this.cardbgs, 'rightbottom', this.bgs[secondInt]);
      this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1);
      setInterval(() => {
        let firstInt = this.$_.random(0, this.bgs.length - 1);
        let secondInt = this.$_.random(0, this.bgs.length - 1);
        while (secondInt == firstInt) {
          secondInt = this.$_.random(0, this.bgs.length - 1);
        }
        this.$set(this.cardbgs, 'lefttop', this.bgs[firstInt]);
        this.$set(this.cardbgs, 'leftKey', this.cardbgs.leftKey + 1);
        this.$set(this.cardbgs, 'rightbottom', this.bgs[secondInt]);
        this.$set(this.cardbgs, 'rightKey', this.cardbgs.rightKey + 1);
        this.$set(this.cardbgs, 'play', true);
      }, Math.floor(Math.random() + 5) * 1000);
    },
    getLabels() {
      let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let today = new Date();
      let dayInText = today.getDay();
      let currLabels = [],
        loopend = dayInText - 7;
      for (let i = dayInText; i > loopend; i--) {
        if (i < 0) {
          let correctId = 7 + i;
          currLabels.push(days[correctId]);
        } else {
          currLabels.push(days[i]);
        }
      }
      this.dailyLabels = this.$_.reverse(currLabels);
    },
    async getCodingData() {
      let codeData = await codingData();
      if (codeData.success && codeData.data != null) {
        this.dailyData = codeData.data.dailyData;
        this.consolMinutes = codeData.data.consolMinutes;
      } else {
        this.dailyData = [];
        this.consolMinutes = [];
      }
    },
    async getLanguageTrend() {
      let trendData = await languageTrend();
      if (trendData.success && trendData.data != null) {
        this.languageTrendData = trendData.data.languageTrendData;
        this.languageTrendLabels = trendData.data.languageTrendLabels;
        this.languageTrendGradients = trendData.data.languageTrendGradients;
      } else {
        this.languageTrendData = [];
        this.languageTrendLabels = [];
        this.languageTrendGradients = [];
      }
    },
    async getEditorsTrend() {
      let editorData = await editorsData();
      if (editorData.success && editorData.data != null) {
        this.editorsTrendData = editorData.data.editorsTrendData;
        this.editorsTrendLabels = editorData.data.editorsTrendLabels;
      } else {
        this.editorsTrendData = [];
        this.editorsTrendLabels = [];
      }
    },
    render() {
      gsap.tweenToRev({
        vm: this,
        emoji: false,
        arrayName: 'animatedArray',
        finalArray: this.wordMaps.hash.map,
        startArray: this.wordMaps.hash.initial,
        arrayProperty: 'hashTag',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#aboutMeTitle',
        emoji: false,
        arrayName: 'animatedArray',
        finalArray: this.wordMaps.title.map,
        startArray: this.wordMaps.title.initial,
        arrayProperty: 'title',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#someWordsTitle',
        emoji: false,
        arrayName: 'animatedArray',
        finalArray: this.wordMaps.someWords.map,
        startArray: this.wordMaps.someWords.initial,
        arrayProperty: 'someWords',
      });
      this.lifeTimeCounter('#lifetime');
      this.setCardBgs();
      this.getLabels();
      this.getCodingData();
      this.getLanguageTrend();
      this.getEditorsTrend();
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
    birthdayDays() {
      let countDown = countUpFromTime('May 16, 2000 16:21:00');
      let remainingDays = 365 - countDown.weeks * 7;
      return remainingDays;
    },
    aboutChips() {
      return [
        {
          name: 'Profile Card',
          icon: 'mdi-account-box-outline',
          id: '#aboutmecard',
        },
        {
          name: 'Languages Known',
          icon: 'mdi-language-csharp',
          id: '#languagesknown',
        },
        {
          name: 'More Stats',
          icon: 'mdi-sign-real-estate',
          id: '#moreStats',
        },
      ];
    },
    languagesKnown() {
      if (this.ismobile) {
        return {
          values: [79, 47, 32, 93, 41],
          labels: ['Nodejs', 'Python', 'ReactJs', 'Vuejs', 'Flutter'],
          gradient: ['#77a1d3', '#79cbca', '#e684ae'],
        };
      } else {
        return {
          values: [79, 47, 38, 32, 93, 39, 49, 52, 21, 26, 99, 48, 62],
          labels: [
            'Nodejs',
            'Python',
            'Illustrator',
            'ReactJs',
            'Vuejs',
            'Adobe Xd',
            'Lightroom',
            'Flutter',
            'Ruby',
            'Java',
            'Excel',
            'Photoshop',
            'Premiere',
          ],
          gradient: ['#77a1d3', '#79cbca', '#e684ae'],
        };
      }
    },
    wordMaps() {
      return aboutpageMaps;
    },
  },
  mounted() {
    this.render();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      let params = to.params;
      if (params.scroll) {
        vm.$vuetify.goTo(params.scrollid);
      }
    });
  },
};
</script>

<style></style>
